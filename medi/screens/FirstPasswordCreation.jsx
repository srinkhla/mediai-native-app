import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import back from '../assets/images/back.svg';
import createNewPassword from '../assets/images/createNewPassword.png';

const FirstPasswordCreation = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const navigation = useNavigation();

    const getUserData = async () => {
        const userName = await AsyncStorage.getItem('userName');
        const phoneNumber = await AsyncStorage.getItem('phoneNumber');
        return { userName, phoneNumber };
    };

    const backButtonHandler = () => {
        navigation.navigate('MoreDetails');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleReEnteredPasswordChange = (text) => {
        setConfirmPassword(text);
    };

    const handleSubmit = async () => {
        if (password === confirmPassword) {
            const { userName, phoneNumber } = await getUserData();
            try {
                const response = await fetch('http://34.131.227.229:8081/patient/password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: userName,
                        phone_number: phoneNumber,
                        password: password,
                    }),
                });
                if (response.ok) {
                    navigation.navigate('Dashboard');
                } else {
                    console.error('Error:', response.statusText);
                    Alert.alert('Error', 'Failed to save the password');
                }
            } catch (error) {
                console.error('Error:', error);
                Alert.alert('Error', 'Failed to save the password');
            }
        } else {
            setPasswordsMatch(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={backButtonHandler}>
                <Image source={back} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>Create Password</Text>
            <Image source={createNewPassword} style={styles.image} />
            <Text style={styles.instruction}>
                Your Password must be strong and easy to remember
            </Text>
            <Text style={styles.label}>Enter New Password</Text>
            <TextInput
                secureTextEntry
                style={styles.input}
                maxLength={10}
                value={password}
                placeholder='Enter Password'
                onChangeText={handlePasswordChange}
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                secureTextEntry
                style={styles.input}
                maxLength={10}
                value={confirmPassword}
                placeholder='Re-enter Password'
                onChangeText={handleReEnteredPasswordChange}
            />
            {!passwordsMatch && <Text style={styles.errorMsg}>Passwords do not match</Text>}
            <Button title="Save Password" onPress={handleSubmit} color="#008080" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    instruction: {
        fontSize: 16,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 20,
    },
    errorMsg: {
        color: 'red',
        marginBottom: 20,
    },
});

export default FirstPasswordCreation;
