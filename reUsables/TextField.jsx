import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState,memo } from 'react';
import { testInitialValues } from './common';
import useFocus from './useFocus';


const TextField = (props) => {
  const [focusChange,focus] = useFocus(testInitialValues);
  const {label,name,error,touched,placeholder,value,setFieldValue} = props;
  // console.log('text field');
  return (
    <View style={[styles.container]}>
      <Text style={[styles.label]}>{label}</Text>
      <TextInput 
      name={name} 
      placeholder={placeholder} 
      style={[styles.input,(touched || focus[name]) && {borderColor:'red',borderWidth:2},
      !error && {borderColor:'gray',borderWidth:0.5},
    ]}
      value={value}
      onFocus={()=>focusChange(name,'focus')}
      onBlur={()=>focusChange(name,'blur')}
      onChangeText={(text)=>setFieldValue(name,text)}
      />
      <Text style={[styles.error]}>{error}</Text>
    </View>
  )
}

export default memo(TextField);

const styles = StyleSheet.create({
  container:{
    width:'85%',
    height:100,
    // backgroundColor:'white'
  },
  label:{

  },
  input:{
    width:'100%',
    padding:10,
    borderWidth:1,
    borderColor:'gray',
    backgroundColor:'white'
  },
  error:{
    color:'red'
  }
})