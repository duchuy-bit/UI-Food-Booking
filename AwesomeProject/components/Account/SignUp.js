import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import  {authentication}  from '../FireBase.js';

import { createUserWithEmailAndPassword } from "firebase/auth";



export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
        };
    }

    register (){
        createUserWithEmailAndPassword(authentication, this.state.email, this.state.password)
        .then((re) => {
            console.log(re)
            Alert.alert(
                "",
                "Sign Up success",
                [
                    { text: "OK", onPress: () => 
                        {
                            console.log("OK Pressed")
                            this.props.navigation.goBack()
                        } 
                    }
                ]
            );
        })
        .catch((error) => {
            console.log(error)
            Alert.alert(
                "Sign Up Fail",
                "Please Sign In Again",
                [
                    { text: "OK", onPress: () => 
                        {
                            console.log("OK Pressed")
                        } 
                    }
                ]
            );
        });

    }



render() {
return (
    <View style={{flex:1}}>
        <Text style={{justifyContent: 'center',fontSize:30,color:'black'}}>Sign Up</Text>
        <View style={styles.textInput}>
            <TextInput 
                onChangeText={(email)=> this.setState({email})}
                
            />
        </View>
        
        <View style={styles.textInput}>
            <TextInput
                secureTextEntry={true}
                onChangeText={(password)=> this.setState({password})}
            />
        </View>

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
                onPress={()=>{this.register()
            }}>
                <View style={{height:50,width:100,backgroundColor:'pink',margin:20,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                    <Text>Sing Up</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=>{this.props.navigation.goBack()
            }}>
                <View style={{height:50,width:100,backgroundColor:'pink',margin:20,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                    <Text>Go Back</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    );
}
}

const styles=StyleSheet.create({
    textInput:{
        height:40,
        marginHorizontal:20,
        marginTop:20,
        borderWidth:0.5,
        borderRadius:5
    }
})
