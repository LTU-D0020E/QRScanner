import React from 'react';
import { View, Text } from 'react-native';

const WheelScreen = ({ navigate ,route }) => {
    const { componentName, componentId } = route.params;

    return (
        <View style={{ backgroundColor: '#CECECE', borderRadius: 12, padding: 10 }}>
            <Text>ID: {componentId}</Text>
            <Text>Component Name: {componentName}</Text>
        </View>
    );
}

export default WheelScreen;