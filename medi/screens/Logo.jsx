// components/Logo.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logo = () => {
  const navigation = useNavigation();

  const handleLogoClick = () => {
    // Navigate to the login or signup page
    navigation.navigate('LoginOrSignUp');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoClick}>
        <Text style={styles.logo}>Medi.ai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38b2ac',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Logo;
