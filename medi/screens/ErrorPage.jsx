import React from 'react';
import { View, Text } from 'react-native';
// Consider using a different icon library compatible with React Native Expo

const ErrorPage = () => {
  return (
    <View style={{ backgroundColor: 'teal', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: 'white' }}>Wrong Page</Text>
    </View>
  );
};

export default ErrorPage;
