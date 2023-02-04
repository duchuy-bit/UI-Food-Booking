import React,{Component, useState} from "react";
import { Button, View, Text ,Image, FlatList,TouchableOpacity,SafeAreaView } from "react-native";
import { StyleSheet,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from "react-native-root-toast";

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

import colors from '../assets/colors/colors.js';
import { color } from "react-native-reanimated";

import gioHang from "../assets/data/gioHang";

export default function Detail ({route ,navigation}) {

    const {item} = route.params;
    // // console.log(item.delivery);
    // let toast = Toast.show('This is a message', {
    //     duration: Toast.durations.LONG,
    //     position: Toast.positions.BOTTOM,
    //     shadow: true,
    //     animation: true,
    //     hideOnPress: true,
    //     delay: 0,
    // })


    // const [cart,setCart] = useState([...gioHang]);
    const [id,setId] = useState(gioHang[gioHang.length-1].id+1)

    // console.log(gioHang)
// 
    const renderIngredient =({item})=>{
        return(
        <View 
            style={{
                height:80,width:100,borderRadius: 15,
                backgroundColor:'#FFFFFF',
                marginLeft:20,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Image source={item.image} style={{resizeMode:'contain'}}/>
        </View>
        )
    }

    const addToPopular=()=>{
        // setTimeout(function () {
        //     Toast.hide(toast);
        // }, 500);
        Toast.show('Added to Cart', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER,
            shadow: false,
            animation: true,
            hideOnPress: true,
        })


        setId(id+1)
        gioHang.push({
            id: id,
            idFood: item.id,
            image: item.image,
            title: item.title,
            count: 1
        })
    }


    return (
    
    <View style={{flex:1,backgroundColor:colors.background}}>
    <SafeAreaView>
    <ScrollView>
        {/* go back and rating */}
        <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop: 60, marginHorizontal: 20}}>
            <TouchableOpacity 
                onPress={()=>navigation.goBack()}
            >
                <View style={{height:40,width: 40,borderRadius:10, alignItems:'center',justifyContent: 'center',borderWidth:2, borderColor: colors.textGray}}>
                    <Icon name='chevron-left' size={16} style={{color: colors.textDrak,fontFamily: "Montserrat-Bold"}}/>
                </View>
            </TouchableOpacity>

            <View style={{backgroundColor:colors.prmary,height:40,width:40,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Icon name = 'star' size={12} style={{color:colors.background}}/>
            </View>
        </View>
        {/* Title and price */}
        <View style={{marginTop: 30,marginHorizontal:20}}>
            <Text style={{fontFamily: 'Montserrat-Bold',fontSize:32,color:colors.textDrak,width:'50%'}}>
                {item.title}
            </Text>
            <Text style={{fontFamily: 'Montserrat-SemiBold',fontSize:32,color:colors.price,marginTop:20}}>
                {item.money}
            </Text>
        </View>
        {/* Detail and image */}
        <View style={{flexDirection:'row',marginLeft:20}}>
            <View style={{marginTop:30}}>
                <Text style={styles.detailTitle}>Size</Text>
                <Text style={styles.detailData}>{item.size}</Text>
                <Text style={[styles.detailTitle,{marginTop:20,marginBottom:5}]}>Crust</Text>
                <Text style={styles.detailData}>{item.crust}</Text>
                <Text style={[styles.detailTitle,{marginTop:20,marginBottom:5}]}>Delivery in</Text>
                <Text style={styles.detailData}>{item.delivery}</Text>
            </View>

            <View style={{marginTop:36,marginLeft:34}}>
                <Image source={item.image} style={{height:196,width: 326,resizeMode:'contain',}}/>
            </View>
        </View>
        {/* Ingredients */}
        <View style={{marginTop:25}}>
            <Text style={[styles.detailData,{marginLeft:20,marginBottom:19}]}>Ingredients</Text>
            <FlatList
                data={item.ingredient}
                renderItem={renderIngredient}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // keyExtractor
            />
        </View>
        {/* Order */}
        <TouchableOpacity onPress={addToPopular}  >
        <View 
            style={{flexDirection: 'row',marginTop:58,marginHorizontal:20,
                backgroundColor:colors.prmary,
                alignItems:"center",
                justifyContent:'center',
                height: 62,
                borderRadius: 50
                }}>
            <Text style={{fontSize:14,
                    fontFamily: 'Montserrat-Bold',color:colors.textDrak,
                    marginRight:11}}>Place an order</Text>
            <Icon name= 'chevron-right' size={20}/>
        </View>
        </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
    </View>
    )

    
}

const styles = StyleSheet.create({
    detailTitle:{
        fontSize:14,
        fontFamily: 'Montserrat-Regular',
        color:colors.textGray
    },
    detailData:{
        fontSize:16,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.textDrak
    }
})
