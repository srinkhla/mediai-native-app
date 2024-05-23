import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'redux'; // Assuming you're using Redux for state management
import { setPhoneNumber } from '../utils/actions'; // Assuming actions file path
import { selectPhoneNumber } from '../utils/selector'; // Assuming selector file path
import { navigate } from '@react-navigation/native'; // Assuming using @react-navigation/native

const SignUp = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [numberErrorMsg, setNumberErrorMsg] = useState('');
  const [numberError, setNumberError] = useState(false);
  const dispatch = useDispatch();
  const phoneNumber = useSelector(selectPhoneNumber);

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
      dispatch(setPhoneNumber(inputValue));
      localStorage.setItem('phoneNumber', inputValue); // Consider using AsyncStorage instead of localStorage in React Native Expo
      navigate('/otpScreen'); // Assuming navigation path
    } else {
      setNumberError(true);
      setNumberErrorMsg('Please enter a 10 digit phone number.');
    }
  };

  useEffect(() => {
    // setNumberErrorMsg(""); // You can remove this line if not needed
  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1, marginTop: 8, marginHorizontal: 20 }}>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'teal' }}>Medi.ai</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Please register yourself</Text>
      </View>

      <View>
        <form>
          <View style={{ height: 20 }} />

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18 }}>Enter mobile number:</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Assuming back.svg is an image in your project's assets folder */}
            <Image source={require('../assets/images/back.svg')} style={{ width: 20, height: 20, marginRight: 10 }} onPress={backButtonHandler} />
            <TextInput
              style={{ backgroundColor: '#f5f5f5', borderRadius: 50, padding: 10, flex: 1 }}
              keyboardType="numeric"
              maxLength={10}
              value={inputValue}
              placeholder="Mobile Number"
              onChangeText={numberValidator}
            />
          </View>
          {!isValid && <Text style={{ color: 'red', marginTop: 3 }}>Please enter a valid number</Text>}
          {numberError && <Text style={{ color: 'red', marginTop: 3 }}>{numberErrorMsg}</Text>}

          <View style={{ marginTop: 10 }}>
            <Button title="Continue" onPress={numberSubmit} color="teal" />
          </View>
          {/* <View>
            Already have an account?
          </View> */}
        </form>
      </View>
    </View>
  );
};

export default SignUp;