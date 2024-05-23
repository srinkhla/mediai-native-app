// screens/LoginPage.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loginMethod, setLoginMethod] = useState('mobile'); // Default to login via mobile
  const [continueDisable, setContinueDisable] = useState(true);

  const handleUserIdChange = (text) => {
    setUserId(text);
    if (text.length === 10) {
      setContinueDisable(false);
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    setErrorMsg("");
    if (!userId || !password) {
      setErrorMsg("Please Enter UserId & Password");
    } else {
      const apiUrl = loginMethod === 'mobile' ? 'http://34.131.227.229:8081/patient/signin_phone' : 'http://34.131.227.229:8081/patient/login_uuid';
      const payload = loginMethod === 'mobile' ? { phone_number: userId, password: password } : { user_id: userId, password: password };

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        referrerPolicy: 'strict-origin-when-cross-origin'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle successful login response
        navigation.navigate('Dashboard'); // Navigate to dashboard upon successful login
        console.log(data);
      })
      .catch(error => {
        // Handle error
        setErrorMsg("Phone Number or Password is incorrect");
        console.error('There was a problem with the login request:', error);
      });
    }
  };

  const forgetPasswordFunction = () => {
    navigation.navigate('ForgetPassword');
  }

  const goToSignUp = () => {
    navigation.navigate('RegistrationForm');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medi.ai</Text>
      <Text style={styles.subtitle}>Login via</Text>
      <View style={styles.buttonContainer}>
        <Button title="Mobile No." onPress={() => setLoginMethod('mobile')} color={loginMethod === 'mobile' ? '#38b2ac' : '#4fd1c5'} />
        <Button title="UID No." onPress={() => setLoginMethod('uid')} color={loginMethod === 'uid' ? '#38b2ac' : '#4fd1c5'} />
      </View>
      <View>
        {loginMethod === 'mobile' ? (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter your Mobile Number:</Text>
            <TextInput
              style={styles.input}
              maxLength={10}
              keyboardType="numeric"
              onChangeText={handleUserIdChange}
            />
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter your UID:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleUserIdChange}
            />
          </View>
        )}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={handlePasswordChange}
          />
        </View>
        {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} disabled={continueDisable}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={forgetPasswordFunction}>
          <Text style={styles.linkText}>Forget Password?</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Don't have an account?{' '}
          <Text style={styles.signUpLink} onPress={goToSignUp}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#38b2ac',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#38b2ac',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#38b2ac',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorMsg: {
    color: 'red',
    marginBottom: 20,
  },
  linkText: {
    color: '#38b2ac',
    textAlign: 'center',
    marginTop: 10,
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 20,
  },
  signUpLink: {
    color: '#38b2ac',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
