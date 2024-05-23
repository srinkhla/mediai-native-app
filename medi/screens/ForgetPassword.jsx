import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { navigate } from '@react-navigation/native'; // Assuming using @react-navigation/native

const ForgetPassword = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [numberErrorMsg, setNumberErrorMsg] = useState('');
  const [numberError, setNumberError] = useState(false);

  const numberValidator = (e) => {
    const value = e.nativeEvent.text;
    setInputValue(value);
    setIsValid(!isNaN(value));
  };

  const backButtonHandler = () => {
    navigate('/loginPage'); // Assuming navigation path
  };

  const numberSubmit = () => {
    console.log('inputValue-', inputValue);

    if (inputValue.length === 10) {
      setNumberError(false);
      navigate('/forgetOtpScreen'); // Assuming navigation path
    } else {
      setNumberError(true);
      setNumberErrorMsg('Please enter a 10 digit phone number.');
    }
  };

  useEffect(() => {
    // You can remove this useEffect hook if not used
  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1, marginTop: 8, marginHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../assets/images/back.svg')} style={{ width: 20, height: 20, marginRight: 10 }} onPress={backButtonHandler} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Forgot Password</Text>
      </View>
      <Image source={require('../assets/images/forgetPassword.png')} style={{ width: 50, height: 50, marginTop: 20, alignSelf: 'center' }} />

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16 }}>Please enter your Mobile Number to verify your account</Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16 }}>Mobile Number</Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <TextInput
          style={{ backgroundColor: '#f5f5f5', borderRadius: 50, padding: 10, flex: 1 }}
          keyboardType="numeric"
          maxLength={10}
          value={inputValue}
          placeholder="Enter Mobile Number"
          onChangeText={numberValidator}
        />
      </View>
      {!isValid && <Text style={{ color: 'red', marginTop: 3 }}>Please enter a valid number</Text>}
      {numberError && <Text style={{ color: 'red', marginTop: 3 }}>{numberErrorMsg}</Text>}

      <View style={{ marginTop: 10 }}>
        <Button title="Continue" onPress={numberSubmit} color="teal" />
      </View>
    </View>
  );
};

export default ForgetPassword;
