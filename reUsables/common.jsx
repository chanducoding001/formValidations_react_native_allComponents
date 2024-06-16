export const testInitialValues = {
  name: "",
  email: "",
  select:'',
  multiSelect:[],
  files:[],
  date:'',
  test1:'',
  test2:'',
  test3:'',
};
export const testData = [
  {
    name:'name',
    placeholder:'Name',
    id:1,
    label:'Name',
    componentType:'text',
    type:'text'
  },
  {
    name:'email',
    placeholder:'Email',
    id:2,
    label:'Email',
    componentType:'text',
    type:'text'
  },
  {
    name:'select',
    placeholder:'Select',
    id:3,
    label:'Select',
    componentType:'select',
    type:'text'
  },
  {
    name:'multiSelect',
    placeholder:'Multi Select',
    id:3,
    label:'Multi Select',
    componentType:'multiSelect',
    type:'text'
  },
  {
    name:'files',
    placeholder:'Multi Document Select',
    id:4,
    label:'Multi Document Select',
    componentType:'files',
    multipleFiles:true,
    type:'text'
  },
  {
    name:'date',
    placeholder:'Select Date',
    id:5,
    label:'Select Date',
    componentType:'date',
    multipleFiles:true,
    type:'text',
    dateTimeMode:'date'
  },
  // {
  //   name:'modal',
  //   placeholder:'Click Modal',
  //   id:5,
  //   label:'Click Modal',
  //   componentType:'modal',
  //   multipleFiles:true,
  //   type:'text',
  //   dateTimeMode:'date'
  // },
  
]
export const modalFields = [
  {
    name:'test1',
    placeholder:'Test1',
    id:6,
    label:'Test1',
    componentType:'select',
    type:'text'
  },
]
export const modalFieldsRequired = [
  
  {
    name:'test2',
    placeholder:'Test2',
    id:6,
    label:'Test2',
    componentType:'text',
    type:'text'
  },
  {
    name:'test3',
    placeholder:'Test3',
    id:7,
    label:'Test3',
    componentType:'text',
    type:'text'
  },
]
export const modalSelectData = [
  {
    id:1,
    label:'Detected',
    value:'detected'
  },
  {
    id:2,
    label:'Not detected',
    value:'notdetected'
  },
]
export const selectData = [
  {
    id:1,
    label:'One',
    value:'one'
  },
  {
    id:2,
    label:'Two',
    value:'two'
  },
  {
    id:3,
    label:'Three',
    value:'three'
  },
]
// <TextInput placeholder='Name' name='name' style={[styles.input]}/>
// <Text style={[styles.btnText]}>{errors.name}</Text>
// <TextInput placeholder='Email' name='email' style={[styles.input]}/>
// <Text style={[styles.btnText]}>{errors.name}</Text>
// <TouchableOpacity  style={[styles.btn]} onPress={handleSubmit}>
// <Text style={[styles.btnText]}>Submit</Text>
// </TouchableOpacity>
// <TouchableOpacity  style={[styles.btn]} onPress={resetForm}>
// <Text style={[styles.btnText]}>Reset</Text>
// </TouchableOpacity> 


{/* <TextField name='name' 
placeholder='Name' 
label='Name' 
error={touched['name'] && errors.name}
value={values.name}
setFieldValue={setFieldValue}
/>
<TextField name='email' 
placeholder='Email' 
label='Email' 
error={touched['email'] && errors.email}
value={values.email}
setFieldValue={setFieldValue}
/> */}