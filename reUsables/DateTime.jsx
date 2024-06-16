import { Button, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = (props) => {
    const {label,value,name,placeholder,setFieldValue,dateTimeMode,error} = props;
    const [date,setDate] = useState(new Date());
    const [show,setShow] = useState(false);
    const [mode,setMode] = useState('date');
    const [text,setText] = useState('Empty');

    const onChange = (event,selectedDate)=>{
        const currentDate = selectedDate || date;
        setShow(Platform.OS==='ios');
        setDate(currentDate);

        const tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
        let ftime = 'Hours: '+tempDate.getHours()+' |minutes: '+tempDate.getMinutes();
        setText(fDate + '\n' + ftime);
        setFieldValue(name,fDate);
    }
    const showMode = (currentMode)=>{
        setShow(true);
        setMode(currentMode);
    }
  return (
    <View style={[styles.container]}>
      <View >
            <Text>{label}</Text>
            <TouchableOpacity style={[styles.uploadBtn]} onPress={()=>showMode(dateTimeMode)}>
                <Text style={[styles.btnText]}>{value ? value : placeholder}</Text>
            </TouchableOpacity>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {value && <Text>{value}</Text>}
        </View>
      {
        show && 
        <DateTimePicker
        mode={mode}
        testId='DateTimePicker'
        value={date}
        is24Hour={true}
        onChange={onChange}
        display='default'
        />
      }
    </View>
  )
}

export default DateTime;

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginVertical: 10,
        marginHorizontal: 'auto'
    },
    uploadBtn: {
        backgroundColor: 'gray',
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
