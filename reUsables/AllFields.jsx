import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import TextField from './TextField'
import SelectComponent from './SelectComponent'
import MultiSelectComponent from './MultiSelectComponent'
import MultipleUploads from './MultipleUploads'
import DateTime from './DateTime'
import ModalField from './ModalField'

const AllFields = (props) => {

    const {componentType,...rest} = props
    switch(componentType){
        case 'text':return <TextField {...rest}/>;
        case 'select':return <SelectComponent {...rest}/>;
        case 'multiSelect':return <MultiSelectComponent {...rest}/>;
        case 'files':return <MultipleUploads {...rest}/>;
        case 'date':return <DateTime {...rest}/>;
        // case 'modal':return <ModalField {...rest}/>
        default:return <TextField {...rest}/>;
    }
}

export default memo(AllFields);

