import React,{Component} from 'react';
import{View,Text, TextInput, StyleSheet, TouchableOpacity,Alert, Modal,ScrollView, KeyboardAvoidingView,FlatList } from 'react-native';

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
            allrequests:'',
            itemDescription:'',
            itemName:''
        }
    }
render(){
    <FlatList
    keyExtractor={this.keyExtractor}
    data={this.state.allrequests}
    renderItem={this.renderItem}
    />
    
   renderItem=({item,i})=>{
console.log(item.itemName);
return(
    <ListItem
    key={i}
    title={item.itemName}
    subtitle={item.itemDescription}
    titleStyle={{color:'black', fontWeight:'bold'}}
    rightElement={
        <TouchableOpacity style={StyleSheet.button}>
            <Text style={{color:'#ffff'}}>Exchange</Text>
        </TouchableOpacity>
    }
    bottomDivider
    />
)
   }
  
}
}