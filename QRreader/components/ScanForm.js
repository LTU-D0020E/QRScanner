import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const ScanForm = ({navigate, route}) => {
    const [secondSelectedValue, setSecondSelectedValue] = useState(null);
    const [parsedData, setParsedData] = useState(null); // State to hold parsed data
    const navigation = useNavigation();
    const { scannedData } = route.params;

    useEffect(() => {
        if (scannedData) {
            const data = JSON.parse(scannedData);
            const { name, id, manufactured_by, created_at, carbon_footprint } = data;
            const { owner_name } = manufactured_by;
            const creation_time = created_at.creation_time.$date; // Extracting the date string
            const { effect } = carbon_footprint;

            // Set the parsed data
            setParsedData({ name, id, owner_name, creation_time, effect });
        }
    }, [scannedData]);

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

                {/* Display parsed data */}
                {parsedData && (
                    <View style={{ backgroundColor: '#CECECE', borderRadius: 12, padding: 10 }}>
                        <Text>Name: {parsedData.name}</Text>
                        <Text>ID: {parsedData.id}</Text>
                        <Text>Owner Name: {parsedData.owner_name}</Text>
                        <Text>Creation Time: <Text>{new Date(parsedData.creation_time).toLocaleString()}</Text></Text>
                        <Text>Effect: {parsedData.effect}</Text>
                    </View>
                )}

                <Text style={{ textAlign: 'center', marginTop: 30, fontWeight: 'bold', marginBottom: 20 }}> components </Text>
                
                {/* Remove the first dropdown block */}
                
                <View style={{ borderWidth: 1, borderColor: '#CECECE', padding: 15, borderRadius: 12, marginVertical: 10 }}>
                    <RNPickerSelect
                        items={Secondoptions}
                        onValueChange={(value) => navigation.navigate('WheelScreen', { value: value })}
                        value={secondSelectedValue}
                        placeholder={Secondplaceholder}
                        /* style={{
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
                        }} */
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default ScanForm

const styles = StyleSheet.create({

})
