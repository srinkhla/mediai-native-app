import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { selectUserReport } from '../utils/selector';
import { setReport } from '../utils/actions';
import PreviewReportPDF from './PreviewReportPDF';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import back from '../assets/images/back.svg';

const PreviewReport = ({ images }) => {
    const [hasPdf, setHasPdf] = useState(false);
    const [userName, setUserName] = useState('');
    const userReport = useSelector(selectUserReport);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [sound, setSound] = useState();

    useEffect(() => {
        const hasPdfFile = userReport.some(file => file[0].type === 'application/pdf');
        setHasPdf(hasPdfFile);

        const fetchUserName = async () => {
            const username = await AsyncStorage.getItem('userName');
            if (username) {
                setUserName(username);
            }
        };
        fetchUserName();
    }, [userReport]);

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/tone.mpeg')
        );
        setSound(sound);
        await sound.playAsync();
    };

    useEffect(() => {
        return sound ? () => {
            sound.unloadAsync();
        } : undefined;
    }, [sound]);

    const filesSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('user_name', userName);

            for (let i = 0; i < userReport.length; i++) {
                const image = userReport[i];
                if (image[0] instanceof File) {
                    formData.append("file", {
                        uri: image[0].uri,
                        name: image[0].name,
                        type: image[0].type
                    });
                }
            }

            const response = await axios.post('http://34.16.227.186:5000/extract', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setShowSuccessModal(true);
            await playSound();
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
            await playSound();
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {hasPdf && images && images.length > 0 ? (
                    <View style={styles.pdfPreview}>
                        <PreviewReportPDF binaryData={userReport[0][0]} />
                    </View>
                ) : (
                    <View style={styles.imagePreview}>
                        {images && images.length > 0 && images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={styles.thumbnail}
                                alt={`Thumbnail ${index}`}
                            />
                        ))}
                    </View>
                )}
                <TouchableOpacity style={styles.submitButton} onPress={filesSubmit}>
                    <Text style={styles.submitButtonText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>

            {showSuccessModal && (
                <Modal transparent={true} visible={showSuccessModal}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>File Uploaded Successfully!</Text>
                            <Text style={styles.modalText}>Your file has been successfully uploaded.</Text>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => {
                                    setShowSuccessModal(false);
                                    navigation.navigate('Dashboard');
                                }}>
                                <Text style={styles.modalButtonText}>Okay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 20,
    },
    pdfPreview: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
    },
    imagePreview: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
    },
    thumbnail: {
        width: '100%',
        margin: 5,
        resizeMode: 'contain',
    },
    submitButton: {
        backgroundColor: '#008080',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#008080',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default PreviewReport;
