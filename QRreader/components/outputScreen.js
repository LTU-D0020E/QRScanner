import React from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';

export default function OutputScreen({ route }) {
  const { scannedData } = route.params;

  const openLink = () => {
    // Check if the scanned data is a valid URL
    if (isValidUrl(scannedData)) {
      // Open the URL in the default browser
      Linking.openURL(scannedData);
    } else {
      // Handle invalid URL
      alert('Invalid URL');
    }
  };

  // Function to check if a string is a valid URL
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>Scanned Data:</Text>
      <Text style={styles.scannedData}>{scannedData}</Text>
      <Button title="Open Link" onPress={openLink} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 20,
    marginBottom: 10,
  },
  scannedData: {
    fontSize: 16,
    marginBottom: 20,
  },
});