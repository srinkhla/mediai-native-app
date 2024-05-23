import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Assuming you're using @react-navigation/native
import ReportViewer from './ReportViewer'; // Assuming ReportViewer is a separate component

const ReportViewerPage = () => {
  const route = useRoute();
  const { url } = route.params || {}; // Handle cases where params might be undefined

  return (
    <View style={{ flex: 1 }}>
      <ReportViewer url={url} />
    </View>
  );
};

export default ReportViewerPage;
