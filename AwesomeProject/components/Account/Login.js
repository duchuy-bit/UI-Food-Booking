import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity , Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import  {authentication}  from '../FireBase.js';

import { signInWithEmailAndPassword  } from "firebase/auth";



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
        };
    }

    storeLogin = async () => {
        try {
            await AsyncStorage.setItem(
                'Login',
                'I like to save it.'
            ).finally(()=> console.log('store thanh cong'));
        } catch (error) {
          // Error saving data
        }
    };

    loginwithEmail (){
        signInWithEmailAndPassword(authentication, this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in 
            console.log('login thanh cong')
            const user = userCredential.user;
            console.log(user.email)

            Alert.alert(
                "",
                "Login Success",
                [
                    { text: "OK", onPress: () => 
                        {
                            console.log("OK Pressed")
                            this.storeLogin()
                            this.props.navigation.replace('Home')
                        } 
                    }
                ]
            );
        })
        .catch((error) => {
            console.log(error)
            Alert.alert(
                "Email or password is not correct",
                "Please Login Again",
                [
                    { text: "OK", onPress: () => 
                        {
                            console.log("Login Again")
                        } 
                    }
                ]
            );
        });

        // createUserWithEmailAndPassword(authentication, this.state.email, this.state.password)
        // .then((re) => {
        //     console.log(re)
        // })
        // .catch((error) => {
        //     console.log(error)
        // });
    }



render() {
return (
    <View style={{flex:1}}>
        <Text style={{justifyContent: 'center',fontSize:30,color:'black'}}>Login</Text>
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
                onPress={()=>{this.loginwithEmail()
            }}>
                <View style={{height:50,width:100,backgroundColor:'pink',margin:20,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                    <Text>Login</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=>{this.props.navigation.navigate('SignUp')
            }}>
                <View style={{height:50,width:100,backgroundColor:'pink',margin:20,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                    <Text>Sign Up</Text>
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
