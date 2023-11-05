import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default function OutputScreen({ navigation, route }) {
  const { scannedData } = route.params;
  

  return (
    <View>
      <Text>Scanned Data:</Text>
      <Text style={styles.maintext}>{scannedData}</Text>
      <Button title="Go Back to Scan" onPress={() => {
        navigation.navigate('Scan');
        }} />
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
      fontSize: 16,
      margin: 50,
    },
    barcodebox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
      backgroundColor: 'tomato'
    }
  });