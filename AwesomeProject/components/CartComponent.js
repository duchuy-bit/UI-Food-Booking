import React,{Component, useState} from "react";
import { Button, View, Text ,Image, FlatList,TouchableOpacity} from "react-native";
import { StyleSheet,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();


import colors from '../assets/colors/colors.js';
import { SafeAreaView } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import gioHang from "../assets/data/gioHang";

export default class CartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            count: 1
            // gioHang : gioHang
        };
    }

    nhannut(item){
        console.log(item)
        console.log("check")
        this.setState(
            gioHang.forEach(element => {
                if (element.id == item.id) {
                    console.log(element)
                    element.count= element.count-1
                }
            })
        )
    }

    nhannutCong(item){
        console.log(item)
        console.log("check")
        this.setState(
            gioHang.forEach(element => {
                if (element.id == item.id) {
                    console.log(element)
                    element.count= element.count+1
                }
            })
        )
    }

render() {
    return (
        <View style={{flex:1,backgroundColor: colors.background}}>
        <ScrollView>
            {/* go back and rating */}
            <SafeAreaView>
                <View style={{flexDirection:'row',marginHorizontal: 20,marginTop: 20}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <View  style={{height:40,width: 40,borderRadius:10, 
                                alignItems:'center',justifyContent: 'center',
                                borderWidth:2, borderColor: colors.textGray}}>
                            <Icon name='chevron-left' size={16} style={{color: colors.textDrak,fontFamily: "Montserrat-Bold"}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontFamily: 'Montserrat-Bold',fontSize:32,color:colors.textDrak}}>
                            Cart
                        </Text>
                    </View>
                    
                </View>
            </SafeAreaView>
            {/* position: 'absolute'  chữ chồng lên nhau*/}
            <View style={{marginTop: 20,marginHorizontal: 20}}>
                <Text style={{marginHorizontal: 20, fontFamily: 'Montserrat-Bold', fontSize: 20, color: colors.textDrak,}}>
                    Food
                </Text>
    
                {gioHang.map((item)=>{
                    {/* this.setState(
                        this.state.count=item.count
                    ) */}
                    {/* let this.setState(
                        
                    ) */}
                    return(
                        <View key={item.id} style={{flexDirection:'row',backgroundColor: '#FFFFFF',
                                marginTop:15,borderRadius:25
                            }}>
                            <Image source={item.image} style={{resizeMode:'contain',flex:0.4,height:100}}/>
                            <View style={{flex: 0.6,justifyContent: 'center'}}>
                                <Text style={{marginLeft: 25,
                                        fontSize:16,
                                        fontFamily: 'Montserrat-SemiBold',
                                        color: colors.textDrak
                                }}>
                                    {item.title}
                                </Text>
                                <View style={{flexDirection:'row',marginLeft: 25, marginTop: 10}}>
                                    <TouchableOpacity onPress={()=>this.nhannut(item)}>
                                        <View style={styles.addAmount} >
                                            <Text style={styles.addButton}>-</Text>
                                        </View>   
                                    </TouchableOpacity>
                                        <View>
                                            <Text style={{marginRight:20}}>{item.count}</Text>
                                        </View>       
                                    <TouchableOpacity  onPress={()=>this.nhannutCong(item)}>
                                        <View style={styles.addAmount}>
                                            <Text style={styles.addButton}>+</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
    
            {/* <TouchableOpacity onPress={test}>
                <View style={styles.addAmount}>
                    <Text style={styles.addButton}>+</Text>
                </View>
            </TouchableOpacity> */}
        </ScrollView>
        </View>
    );
}
}


const styles= StyleSheet.create({
    addAmount:{
        height:26,
        width:26,
        borderRadius:10,
        borderColor:colors.textGray,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
        // marginTop:10
    },
    addButton:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize:18,
        color:colors.textDrak,
    }

})
