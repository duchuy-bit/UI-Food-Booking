import React,{Component,useEffect, useState} from "react";
import { Button, View, Text ,LogBox  } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from 'react-native-splash-screen'


import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


LogBox.ignoreLogs(["EventEmitter.removeListener"]);
LogBox.ignoreLogs(['Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release.']);

// import colors from './assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

import Home from './components/Home';
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Test from "./components/Test";
import CartComponent from "./components/CartComponent";
import SlashScreen from "./components/SlashScreen";
import Login from "./components/Account/Login";
import SignUp from "./components/Account/SignUp";
import { delay } from "react-native-reanimated/lib/types/lib/reanimated2/animation/delay";

const Stack = createNativeStackNavigator();

export default function App(){

  const [isLogin,setIsLogin] = useState(false);

  const screenDefalt = true     //Home Screen
                                // false is Test Screen
  checkLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('Login')
      .finally(()=>{console.log('load storage thanh cong')});

      if (value !== null) {
        // We have data!!
        if (value == 'I like to save it.') 
          setIsLogin(true);
        console.log('islogin: '+ isLogin)
        console.log(value);
      }
    } catch (error) {
      console.log(error)
        // Error retrieving data
    }
  };



  useEffect(() => {
    checkLogin().finally(()=>{
      // setTimeout(() => {this.setState({timePassed: true})}, 1000)
      setTimeout(() => {
        console.log('delay');
        SplashScreen.hide();
      }, 1000);
  
      // SplashScreen.hide();
    })
    

  }, [])


  return (
    <NavigationContainer >
      <Stack.Navigator 
        initialRouteName= {screenDefalt}
        screenOptions={{headerShown: false}}        
        >
         <Stack.Screen 
                  name="Home" 
                  component={Home} 
                  options={{
                    headerShow: false,
                  }}
                  />

                <Stack.Screen 
                  name="Detail" 
                  component={Detail} 
                  
                  options={{
                    headerShow: false,
                  }}
                  />

                <Stack.Screen 
                  name="Cart" 
                  component={Cart} 
                  options={{
                    headerShow: false,
                  }}
                  />
                
                <Stack.Screen 
                  name="Test" 
                  component={Test} 
                  options={{
                    headerShow: false,
                  }}
                  />

                <Stack.Screen 
                  name="CartComponent" 
                  component={CartComponent} 
                  options={{
                    headerShow: false,
                  }}
                  />
      </Stack.Navigator>
  </NavigationContainer>
  );  
};

