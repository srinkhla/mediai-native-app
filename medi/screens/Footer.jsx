import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // Import icons from @expo/vector-icons

const Footer = () => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Profile'); // Assuming you have a Profile screen in your navigator
  };

  const navigateToDashboard = () => {
    navigation.navigate('Dashboard'); // Assuming you have a Dashboard screen in your navigator
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={navigateToProfile} style={styles.iconContainer}>
        <FontAwesome name="user-circle" size={24} color="black" />
        <Text style={styles.iconText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToDashboard} style={styles.iconContainer}>
        <FontAwesome name="home" size={24} color="black" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="bell" size={24} color="black" />
        <Text style={styles.iconText}>Notifications</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Footer;
