import React,{Component} from 'react';
import{View,Text, TextInput, StyleSheet, TouchableOpacity,Alert, Modal,ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends Component{
    constructor(){
        super();
        this.state={
            itemName:'',
            itemDescription:'',
            userName:''
        }
    }

    addItem =(itemName,itemDescription)=>{
       var userName=this.state.userName
        db.collection('items').add({
            "username":userName,
            "item_name":itemName,
            "item_description":itemDescription,
        })
        this.setState({
            itemName :'',
            reasonToRequest : ''
        })
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text:'OK',onPress:()=>{
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        )
      }

render(){
    return(
        <View style={StyleSheet.container}>
  <TextInput style ={styles.itemName}
                placeholder={"Item Name"}
                onChangeText ={(text)=>{
                    this.setState({
                        itemName:text
                    })
                }}
                value ={this.state.itemName}
              />

<TextInput style ={styles.itemDescription}
                placeholder={"Item Description"}
                onChangeText ={(text)=>{
                    this.setState({
                        itemName:text
                    })
                }}
                value ={this.state.itemDescription}
              />

<TouchableOpacity
            style={[styles.addItem,{marginTop:10}]}
            onPress={()=>{this.addItem(this.state.itemName,this.state.itemDescription)}}
          >
          <Text style={styles.addItemText}>Add Item</Text>
          </TouchableOpacity>

        </View>
    )
}
}