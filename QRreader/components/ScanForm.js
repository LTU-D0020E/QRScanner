import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const ScanForm = () => {
    const [secondSelectedValue, setSecondSelectedValue] = useState(null);
    const navigation = useNavigation();

    const Secondoptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const Secondplaceholder = {
        label: 'Wheel',
        value: null,
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, paddingHorizontal: 25 }}>
                <Text style={{ textAlign: 'center', marginTop: 30, fontWeight: 'bold', marginBottom: 20 }}> Public Data </Text>

                <TextInput
                    style={{ backgroundColor: '#CECECE', height: 150, alignItems: 'flex-start', borderRadius: 12, padding: 10 }}
                />
                <Text style={{ textAlign: 'center', marginTop: 30, fontWeight: 'bold', marginBottom: 20 }}> components </Text>
                
                {/* Remove the first dropdown block */}
                
                <View style={{ borderWidth: 1, borderColor: '#CECECE', padding: 15, borderRadius: 12, marginVertical: 10 }}>
                    <RNPickerSelect
                        items={Secondoptions}
                        onValueChange={(value) => navigation.navigate('WheelScreen', { value: value })}
                        value={secondSelectedValue}
                        placeholder={Secondplaceholder}
                        style={{
                            ...styles,
                            iconContainer: {
                                top: 27,
                                right: 10,
                            },
                            placeholder: {
                                color: '#000',
                                fontSize: 14,
                                fontWeight: 'bold',
                                paddingVertical: 20
                            },
                        }}
                        Icon={() => {
                            return (
                                <View
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderTopWidth: 7,
                                        borderTopColor: '#000',
                                        borderRightWidth: 7,
                                        borderRightColor: 'transparent',
                                        borderLeftWidth: 7,
                                        borderLeftColor: 'transparent',
                                        width: 0,
                                        height: 0,
                                    }}
                                />
                            );
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default ScanForm

const styles = StyleSheet.create({

})