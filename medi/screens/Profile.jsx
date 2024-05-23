import React from "react";
import { View, Text } from 'react-native';
import Footer from "./Footer"; // Assuming Footer is a separate component

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Profile</Text>
      {/* Rest of your profile content here */}
      <Footer />
    </View>
  );
};

export default Profile;
