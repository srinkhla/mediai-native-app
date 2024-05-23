import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation for navigation
import back from '../assets/images/back.svg';
import forgetPassword from '../assets/images/forgetPassword.png';

const ForgetOtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [incorrectOtp, setIncorrectOtp] = useState("");
  const inputs = useRef([]);

  useEffect(() => {
    setIncorrectOtp("");
  }, []);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to the next input box
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, key) => {
    // Move to the previous input box on backspace
    if (key === 'Backspace' && index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
    }
  };

  const backButtonHandler = () => {
    navigation.navigate('ForgetPassword');
  };

  const handleSubmit = () => {
    // Validate inputs here (e.g., check if all inputs are filled)
    console.log('Submitted OTP:', otp);
    setIsSubmitting(true);

    const otpString = otp.join('');
    if (otpString === "7044") {
      setIsSubmitting(false);
      navigation.navigate('CreateNewPassword');
    } else {
      setIsSubmitting(false);
      setIncorrectOtp("Incorrect OTP");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backButtonHandler}>
        <Image source={back} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>Verify Your Account</Text>
      <Image source={forgetPassword} style={styles.image} />
      <Text style={styles.instructions}>Please enter the OTP sent to your mobile</Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(index, text)}
            onKeyPress={({ nativeEvent }) => handleKeyDown(index, nativeEvent.key)}
            ref={(input) => (inputs.current[index] = input)}
            keyboardType="numeric"
          />
        ))}
      </View>
      {incorrectOtp ? <Text style={styles.errorMsg}>{incorrectOtp}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? 'Continuing...' : 'Continue'}</Text>
      </TouchableOpacity>
      <Text style={styles.resendText}>Resend OTP in 30 seconds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
  backImage: {
    width: 20,
    height: 20,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008080',
    marginVertical: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 16,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  input: {
    width: 55,
    height: 55,
    marginRight: 15,
    textAlign: 'center',
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#ecdede',
  },
  errorMsg: {
    color: 'red',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#008080',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
    marginVertical: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  resendText: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default ForgetOtpScreen;
