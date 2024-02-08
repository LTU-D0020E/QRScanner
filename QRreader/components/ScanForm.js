import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Linking } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const ScanForm = ({ navigate, route }) => {
    const [parsedData, setParsedData] = useState({});
    const [componentNames, setComponentNames] = useState([]);
    const [componentIds, setComponentIds] = useState({});
    const navigation = useNavigation();
    const { scannedData } = route.params;

    useEffect(() => {
        if (scannedData) {
            try {
                const data = JSON.parse(scannedData);
                const components = data.key_components.components.map(component => component.name);
                const componentIds = data.key_components.components.reduce((acc, component) => {
                    acc[component.name] = component.id;
                    return acc;
                }, {});
                const { name, id, manufactured_by, created_at, carbon_footprint } = data;
                const { owner_name } = manufactured_by;
                const creation_time = created_at.creation_time.$date;
                const { effect } = carbon_footprint;

                // Parse _id data
                const { _id } = data;
                const oid = _id ? _id.$oid : '';

                setParsedData({ name, id, owner_name, creation_time, effect, oid });
                setComponentNames(components);
                setComponentIds(componentIds);
            } catch (error) {
                console.error('Error parsing scanned data:', error);
            }
        } else {
            setParsedData({});
            setComponentNames([]);
            setComponentIds({});
        }
    }, [scannedData]);

    const openLink = () => {
        const url = `https://d0020e-project-dpp.vercel.app/product/${parsedData.oid}`;
        Linking.openURL(url);
    };

    const Secondoptions = componentNames.map((component, index) => ({ label: component, value: component }));

    const Secondplaceholder = {
        label: 'Select Component',
        value: null,
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, paddingHorizontal: 25 }}>
                <Text style={{ textAlign: 'center', marginTop: 30, fontWeight: 'bold', marginBottom: 20 }}> Public Data </Text>

                <View style={{ backgroundColor: '#CECECE', borderRadius: 12, padding: 10 }}>
                    {parsedData && (
                        <>
                            <Text>Name: {parsedData.name}</Text>
                            <Text>ID: {parsedData.id}</Text>
                            <Text>Owner Name: {parsedData.owner_name}</Text>
                            <Text>Creation Time: {parsedData.creation_time}</Text>
                            <Text>Effect: {parsedData.effect}</Text>
                        </>
                    )}
                </View>

                <Text style={{ textAlign: 'center', marginTop: 30, fontWeight: 'bold', marginBottom: 20 }}> Components </Text>
                
                <View style={{ borderWidth: 1, borderColor: '#CECECE', padding: 15, borderRadius: 12, marginVertical: 10 }}>
                    <RNPickerSelect
                        items={Secondoptions}
                        onValueChange={(value) => navigation.navigate('WheelScreen', { componentName: value, componentId: componentIds[value] })}
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

                {/* Text for more information */}
                <Text style={{ textAlign: 'center', marginTop: 20, marginBottom: 10, fontStyle: 'italic' }}>For more information about the product</Text>

                {/* Button to open the link */}
                <Button title="Open Link" onPress={openLink} />
                
            </View>
        </ScrollView>
    )
}

export default ScanForm

const styles = StyleSheet.create({

})
