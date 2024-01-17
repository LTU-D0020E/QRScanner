import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

export default function SplashScreen({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => navigation.replace('AppStack'));
    }, [fadeAnim, navigation]);

    return (
        <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', opacity: fadeAnim }}>
            <Text>Splash Screen</Text>
        </Animated.View>
    );
}