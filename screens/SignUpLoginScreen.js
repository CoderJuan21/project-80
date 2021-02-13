import React,{Component} from 'react';
import{View,Text, TextInput, StyleSheet, TouchableOpacity,Alert, Modal,ScrollView, KeyboardAvoidingView } from 'react-native';

export default class SignUpLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
      isModalVisible:'false'
        }
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emaild, password)
  .then(() => {
  
   return Alert.alert("Successful Login")
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    return Alert.alert(errorMessage);
  
  });
    }

    userSignUp=(emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emaild, password)
    .then(() => {
    
     return Alert.alert("User Added Successfully")
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
  
      return Alert.alert(errorMessage);
    
    });
      }

      showModal = ()=>{
        return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          >
          <View style={styles.modalContainer}>
            <ScrollView style={{width:'100%'}}>
              <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text
                style={styles.modalTitle}
                >Registration</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder ={"First Name"}
                maxLength ={8}
                onChangeText={(text)=>{
                  this.setState({
                    firstName: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Last Name"}
                maxLength ={8}
                onChangeText={(text)=>{
                  this.setState({
                    lastName: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Contact"}
                maxLength ={10}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                  this.setState({
                    contact: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Address"}
                multiline = {true}
                onChangeText={(text)=>{
                  this.setState({
                    address: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Email"}
                keyboardType ={'email-address'}
                onChangeText={(text)=>{
                  this.setState({
                    emailId: text
                  })
                }}
              /><TextInput
                style={styles.formTextInput}
                placeholder ={"Password"}
                secureTextEntry = {true}
                onChangeText={(text)=>{
                  this.setState({
                    password: text
                  })
                }}
              /><TextInput
                style={styles.formTextInput}
                placeholder ={"Confrim Password"}
                secureTextEntry = {true}
                onChangeText={(text)=>{
                  this.setState({
                    confirmPassword: text
                  })
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=>
                    this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                  }
                >
                <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={()=>this.setState({"isModalVisible":false})}
                >
                <Text style={{color:'#ff5722'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Modal>
      )
      }

render(){
    return(
    <View style={styles.container}>
<View>
    <Text style={styles.title}>Barter System</Text>
</View>
{
    this.showModal()
}
<View>
    <TextInput style={styles.inputBox}
    placeholder='abc@example.com'
    keyboardType="email-address"
    onChangeText={(text)=>{
        this.setState({
            emailId:text
        })
    }}>

    </TextInput>

    <TextInput style={styles.inputBox}
    secureTextEntry={true}
    placeholder="enter password"
    onChangeText={(text)=>{
        this.setState({
            password:text
        })
    }}>

    </TextInput>

<TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
onPress={()=>{
    this.userLogin(this.state.emailId, this.state.password)
}}>
    <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
onPress={()=>{
    this.userSignUp(this.state.emailId, this.state.password)
}}>
    <Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>
</View>
    </View>    
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ab12cd"
    },
    title:{
      marginLeft:200,
        fontSize:40,
        fontWeight:'bold',
        paddingBottom:30,
        color:"green",
    },
    inputBox:{
      marginLeft:200,
        width:300,
        height:40,
        borderBottomWidth:4,
        borderColor:"white",
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },
    button:{
      marginLeft:200,
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:35,
        backgroundColor:"blue",
    },
    buttonText:{
      marginLeft:200,
        color:"black",
        fontWeight:"bold",
        fontSize:20,
    },
    KeyboardAvoidingView:{
      marginLeft:200,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle :{
        marginLeft:200,
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
      },
      modalContainer:{
        marginLeft:200,
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        marginLeft:200,
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#dac345',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      registerButton:{
        marginLeft:200,
        width:300,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        marginLeft:200,
        color:'#abc353',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        marginLeft:200,
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
      button:{
        marginLeft:200,
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#gg37d7",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      buttonText:{
        marginLeft:200,
        color:'#234332',
        fontWeight:'200',
        fontSize:25
      }
    
})