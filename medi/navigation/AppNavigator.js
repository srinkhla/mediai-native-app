// navigation/AppNavigator.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../screens/Logo';
import LoginPage from '../screens/LoginPage';
import LoginOrSignUp from '../screens/LoginOrSignUp';
import SignUp from '../screens/SignUp';
import OtpScreen from '../screens/OtpScreen';
import RegistrationForm from '../screens/RegistrationForm';
import MoreDetails from '../screens/MoreDetails';
import Dashboard from '../screens/Dashboard';
import ForgetPassword from '../screens/ForgetPassword';
import ForgetOtpScreen from '../screens/ForgetOtpScreen';
import CreateNewPassword from '../screens/CreateNewPassword';
import FirstPasswordCreation from '../screens/FirstPasswordCreation';
import Preview from '../screens/Preview';
import Profile from '../screens/Profile';
import PreviewReport from '../screens/PreviewReport';
import ShareReport from '../screens/ShareReport';
import ReportViewerPage from '../screens/ReportViewerPage';
import ErrorPage from '../screens/ErrorPage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={Logo} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
         <Stack.Screen name="LoginOrSignUp" component={LoginOrSignUp} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
        <Stack.Screen name="MoreDetails" component={MoreDetails} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ForgetOtpScreen" component={ForgetOtpScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="FirstPasswordCreation" component={FirstPasswordCreation} />
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="PreviewReport" component={PreviewReport} />
        <Stack.Screen name="ShareReport" component={ShareReport} />
        <Stack.Screen name="ReportViewerPage" component={ReportViewerPage} />
        <Stack.Screen name="ErrorPage" component={ErrorPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
