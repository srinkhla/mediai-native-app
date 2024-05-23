import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserReport } from '../utils/selector';
import { setReport } from '../utils/actions';
import PreviewReport from './PreviewReport';
import back from '../assets/images/back.svg';

const Preview = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userReport = useSelector(selectUserReport);
    const [imageSrcs, setImageSrcs] = useState([]);

    useEffect(() => {
        console.log('userReport---', userReport[0]);
        const files = Array.from(userReport[0]);
        Promise.all(
            files.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        resolve(event.target.result);
                    };
                    reader.onerror = (error) => {
                        reject(error);
                    };
                    reader.readAsDataURL(file);
                });
            })
        )
        .then((results) => {
            setImageSrcs(results);
        })
        .catch((error) => {
            console.error('Error reading files:', error);
        });
    }, []);

    const backButtonHandler = () => {
        dispatch(setReport([]));
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={backButtonHandler}>
                    <Image source={back} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Document Preview</Text>
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.warningText}>Please make sure you have selected one report at a time.</Text>
            </View>
            <ScrollView style={styles.previewContainer}>
                {imageSrcs && (
                    <PreviewReport images={imageSrcs} />
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    headerText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    messageContainer: {
        backgroundColor: '#FDE68A',
        padding: 10,
    },
    warningText: {
        color: '#F97316',
        fontSize: 16,
    },
    previewContainer: {
        padding: 10,
        backgroundColor: '#F1F5F9',
    },
});

export default Preview;
