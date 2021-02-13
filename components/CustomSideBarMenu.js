import React, { Component } from "react";
import { View, StyleSheet,Text,FlatList,TouchableOpacity,Image,} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import firebase from "firebase";
import db from "../config";

export default class CustomSiderBarMenu extends Component{
  render(){
    return(
      <View style={styles.container}> 
      <View style={styles.drawerItemsContainer}>
      <DrawerItems {...this.props}/>
      </View>
      <TouchableOpacity style={styles.logout}
      onPress={()=>{
        this.props.navigation.navigate("SignUpLoginScreen")
        firebase.auth().signOut()
      }}>
      <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  logout:{
    backgroundColor:"green",
    width:100,
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:450,
    marginLeft:10
  },
  logoutButtonText:{
    fontSize:20,
    fontWeight:'bold',
    color:"white",
    justifyContent:'center',
    alignSelf:'center'
  }
})