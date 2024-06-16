import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

const useFocus = (initialValues) => {
    // const {initialValues,type,name} = obj;
    const [focus,setFocus] =useState(initialValues);

    const focusChange = useCallback((name,type)=>{
        if(type==='focus'){
            setFocus({...focus,[name]:true})
        }else if(type==='blur'){
            setFocus({...focus,[name]:false})
        }
    },[focus]);

    return [focusChange,focus];
}

export default useFocus;

const styles = StyleSheet.create({})