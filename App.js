import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { modalSelectData, testData, testInitialValues } from './reUsables/common';
import AllFields from './reUsables/AllFields';
import ModalField from './reUsables/ModalField';

const App = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string().required('Email is required'),
    select: Yup.string().required('Select is required'),
    multiSelect: Yup.array().min(1, 'At least one item is required').required('Multi select is required'),
    files: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required(),
          uri: Yup.string().required(),
          type: Yup.string().required(),
        })
      )
      .min(1, 'At least one file is required')
      .required('Files are required'),
    date:Yup.string().required('Date is required!'),
    test1:Yup.string().required('Test1 is required!'),
    
    // test2: Yup.string().when('test1', {
    //   is: 'one',
    //   then: Yup.string().required('Test2 is required!'),
    //   otherwise: Yup.string().notRequired(),
    // }),
    // test3: Yup.string().when('test1', {
    //   is: 'one',
    //   then: Yup.string().required('Test3 is required!'),
    //   otherwise: Yup.string().notRequired(),
    // }),
    
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('values', values);
    resetForm();
  };

  return (
    <View style={styles.container}>
      
      <Formik
        initialValues={testInitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          setTouched, setFieldValue, values, errors, touched, resetForm, handleSubmit
        }) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
            keyboardVerticalOffset={80}
          >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={[styles.heading]}>Formik and Yup validations</Text>
              <View style={styles.wrapper}>
                {testData.map((e) => (
                  <AllFields
                    name={e.name}
                    placeholder={e.placeholder}
                    componentType={e.componentType}
                    type={e.type}
                    setTouched={setTouched}
                    label={e.label}
                    touched={touched[e.name]}
                    value={values[e.name]}
                    error={touched[e.name] && errors[e.name]}
                    key={e.name}
                    setFieldValue={setFieldValue}
                    multipleFiles={e.multipleFiles}
                    mode={e.dateTimeMode}
                    allValues={values}
                    allTouched={touched}
                    allErrors={errors}
                    handleSubmit={handleSubmit}
                  />
                ))}
                <ModalField
                allValues={values}
                allTouched={touched}
                allErrors={errors}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                setTouched={setTouched}
                data={modalSelectData}
                />
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={resetForm}>
                  <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // added background color to prevent flickering
  },
  heading:{
    marginVertical:20,
    alignSelf:'center',
    fontSize:22
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // added padding for better spacing
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
  },
});
