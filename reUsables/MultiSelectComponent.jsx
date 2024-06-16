import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { MultiSelect} from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
import useFocus from './useFocus';
import { selectData, testInitialValues } from './common';

  const SelectComponent = (props) => {
    const {touched,label,value,name,type,placeholder,error,setFieldValue} = props;
    const [focusChange,focus] = useFocus(testInitialValues);
    // const [value, setValue] = useState(null);
    // const [isFocus, setIsFocus] = useState(false);

    // console.log();
    return (
      <View style={styles.container}>
        <Text>{label}</Text>
        <MultiSelect
          // style={[styles.dropdown,!error && {borderColor:'gray',borderWidth:0.5},
          //   (focus[name] || error) && { borderColor: 'red',borderWidth:2 },
          // ]}
          style={[styles.dropdown,
            // !error && {borderColor:'gray',borderWidth:0.5},
            // (focus[name] || error) && { borderColor: 'red',borderWidth:2 },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={selectData}
          search
          maxHeight={300}
          labelField='label'
          valueField='value'
          placeholder={value?.length===0 ? `${placeholder}` : value.length===1 ? 
          'One item is selected':`${value?.length} items are selected`
        }
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => focusChange(name,'focus')}
          onBlur={() => focusChange(name,'blur')}
          onChange={item => {
            setFieldValue(name,item);
            focusChange(name,'blur');
          }}
        />
        <Text>{error}</Text>
      </View>
    );
  };

  export default SelectComponent;

  const styles = StyleSheet.create({
    
    container: {
      backgroundColor: 'white',
      padding: 16,
      width:'95%'
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });