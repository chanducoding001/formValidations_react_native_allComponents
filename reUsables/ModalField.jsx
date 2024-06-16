import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AllFields from './AllFields';
import { modalFields, modalFieldsRequired } from './common';

const ModalField = (props) => {
    const {allErrors,allValues,allTouched,name,setTouched,label,setFieldValue,placeholder,handleSubmit,error} = props;
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View >
    <Button title='show modal' onPress={()=>setModalVisible(true)}/>
    {/* {error && <Text></Text>} */}
        {
            modalVisible && 
            <Modal  animationType="slide"
            
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.container]}>
        <Text>Hello Modal</Text>
        {
            modalFields?.map((e)=>(
                <AllFields
                    name={e.name}
                    placeholder={e.placeholder}
                    componentType={e.componentType}
                    type={e.type}
                    setTouched={setTouched}
                    label={e.label}
                    touched={allTouched[e.name]}
                    value={allValues[e.name]}
                    error={allTouched[e.name] && allErrors[e.name]}
                    key={e.name}
                    setFieldValue={setFieldValue}
                    multipleFiles={e.multipleFiles}
                    mode={e.dateTimeMode}
                  />
            ))
            
        }
            {
                allValues.test1==='one'&& modalFieldsRequired.map((e)=>(
                    <AllFields
                        name={e.name}
                        placeholder={e.placeholder}
                        componentType={e.componentType}
                        type={e.type}
                        setTouched={setTouched}
                        label={e.label}
                        touched={allTouched[e.name]}
                        value={allValues[e.name]}
                        error={allTouched[e.name] && allErrors[e.name]}
                        key={e.name}
                        setFieldValue={setFieldValue}
                        multipleFiles={e.multipleFiles}
                        mode={e.dateTimeMode}
                      />
                ))
            }
        <TouchableOpacity onPress={handleSubmit} style={[styles.btn]}>
            <Text style={[styles.text]}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setModalVisible(false)} style={[styles.btn]}>
            <Text style={[styles.text]}>Close</Text>
        </TouchableOpacity>
        </View>
    </Modal>
        }
    </View>
  )
}

export default ModalField;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        // backgroundColor:'blue'
    },
    btn:{
        marginVertical:20,
        width:'85%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        height:40
    },
    text:{
        color:'white'
    }
})