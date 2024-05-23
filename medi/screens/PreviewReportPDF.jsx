import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Pdf from "react-native-pdf";

const PreviewReportPDF = ({ binaryData }) => {
  const [pdfUri, setPdfUri] = useState(null);

  useEffect(() => {
    if (binaryData) {
      const blob = new Blob([binaryData], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUri(url);
    }
  }, [binaryData]);

  return (
    <View style={styles.container}>
      {pdfUri && (
        <Pdf
          source={{ uri: pdfUri }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default PreviewReportPDF;
