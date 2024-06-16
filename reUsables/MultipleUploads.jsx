import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const MultipleUploads = (props) => {
    const { label, name, setFieldValue,multipleFiles, error, value } = props;

    const handlePress = async () => {
        try {
            const results = await DocumentPicker.getDocumentAsync({
                type: '*/*', // or specify the MIME type(s) you want to support
                multiple: multipleFiles,
            });
            // console.log('results',results);
            if (results.canceled === false) {
                const assets = results.assets;
                const files = assets.map((file,i)=>{return {
                    // name: file.name.split(".")[0],
                    name: file.name,
                    uri: file.uri,
                    type: file.mimeType,
                    size: file.size,
                }}) 
                setFieldValue(name, files);
                // console.log(results);
            }
        } catch (err) {
            console.error('Unknown error: ', err);
        }
    };
    // console.log('value',value);
    return (
        <View style={[styles.container]}>
            <Text>{label}</Text>
            <TouchableOpacity style={[styles.uploadBtn]} onPress={handlePress}>
                <Text style={[styles.btnText]}>Upload Files</Text>
            </TouchableOpacity>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {value && value.map((file, index) => (
                <Text key={index} style={styles.fileText}>{file.name}</Text>
            ))}
        </View>
    );
};

export default MultipleUploads;

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginVertical: 10,
        marginHorizontal: 'auto'
    },
    uploadBtn: {
        backgroundColor: 'blue',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    btnText: {
        color: 'white'
    },
    errorText: {
        color: 'red',
        marginTop: 5
    },
    fileText: {
        marginTop: 5
    }
});
