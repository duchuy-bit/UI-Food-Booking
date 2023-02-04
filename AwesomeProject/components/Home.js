import React,{Component} from "react";
import { Button, View, Text ,Image, FlatList,TouchableOpacity} from "react-native";
import { StyleSheet,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { signOut } from "firebase/auth";
import { authentication } from "./FireBase.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();


import colors from '../assets/colors/colors.js';
import { SafeAreaView } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import gioHang from "../assets/data/gioHang";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text> Home </Text>
//       </View>
//     );
//   }
// }


export default  Home = ({navigation}) =>{

    // console.log(gioHang)
    const LogOut  = async ()=>{
        signOut(authentication).then(() => {
            console.log('Sign-out successful.')
            try {
                AsyncStorage.setItem(
                    'Login',
                    'log out'
                ).finally(()=> console.log('store log out thanh cong'));
            } catch (error) {
              // Error saving data
            }
        }).catch((error) => {
            console.log(error)
    });
    }

    

    const renderCategoryItem =({item}) => {
        return(
            <View style={[styles.categoryItemWrapper,
                {
                    backgroundColor: item.selected? colors.prmary: colors.category,
                    marginLeft: item.id == 1? 20: 0 
                }]} >
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categoryItemSelected,{
                    backgroundColor: item.selected? '#FFFFFF': colors.secondary
                }]}>
                    <Icon name='navigate-next' size={16} 
                        style={[styles.categoryItemIcon,
                                {color: item.id == 1? colors.textDrak: colors.background}
                    ]}/>
                </View>
            </View>
        )
    };

    return (
    <View style = {styles.container}>
    <ScrollView>
        {/* Header */}
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={()=>navigation.navigate('Test')}>
                    <Image 
                        source={require('../assets/images/meme.jpg')}
                        style={styles.profileImage}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={LogOut}>
                    <View>
                        <Text>Log out</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('CartComponent')}>
                    <Icon name="shopping-cart" size={30} color= {colors.textDrak} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>

        {/* Text */}
        <View style={styles.title}>
            <Text style={styles.titleSubtitle}>Food</Text>
            <Text style={styles.titleDescription}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.Search}>
            <Icon name='search' size={16}/>
            <View style={styles.borderSearch}>
                <Text style={styles.textSearch}>
                    Search
                </Text>
            </View>
        </View>

        {/* Categories */}
        <View style={styles.Categories}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoriesWrapper}>
                <FlatList
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item, index) => index.toString()} //Add this line
                    horizontal={true}           //hiển thị theo chiều ngang
                    showsHorizontalScrollIndicator = {false}    // hiển thị con lăn
                />
            </View>
        </View>

        {/* Popular */}
        <View style={styles.Popular}>
            <Text style={styles.popularText}>Popular 😜</Text>
            {popularData.map((item)=> {
            return (
                <TouchableOpacity key={item.id} 
                        onPress={()=> navigation.navigate('Detail',{item})}
                >
                    <View 
                        style={styles.popularWrapper}>
                        <View style={styles.popularLeft}>
                            <View style={styles.popularKing}>
                                <Icon name='assistant' color={colors.price}/>
                                <Text style={styles.popularTextKing}>top of the week</Text>
                            </View>

                            <Text style={styles.popularTitle}>
                                {item.title}
                            </Text>

                            <Text style={styles.popularWeight}>
                                Weight {item.weight}
                            </Text>

                            {/* add and rating */}
                            <View style ={{
                                flexDirection:'row',
                                alignItems: 'center',
                                // backgroundColor: '#00FF00',
                                marginTop: 10
                            }}>
                                <View style={{
                                    height:53, width: 90,backgroundColor: colors.prmary,
                                    justifyContent:'center',
                                    alignItems: 'center',
                                    borderTopRightRadius: 25,
                                    borderBottomLeftRadius: 25,
                                    
                                }}>
                                    <Text   style={{
                                        fontFamily: "Montserrat-Bold",fontSize: 20
                                    }}>+</Text>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                }}>
                                    <Icon name='star' size={15} style={{
                                        marginLeft: 20,
                                        
                                    }}/>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontFamily: 'Montserrat-Regular',
                                        fontSize: 12,
                                    }}>{item.rate}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.popularRight}>
                            {/* Image */}
                            <Image source={item.image}
                                style={{
                                    height:125,width:210,                                
                                }}
                            />
                        </View>
                    </View>   
                </TouchableOpacity>
            )
                
            })}
        </View>
        </ScrollView>
    </View>
    );
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex:1,
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImage:{
        width: 50,
        height: 50,
        borderRadius: 40,
    },

    title:{
        paddingTop: 30,
        marginHorizontal: 20,
    },
    titleSubtitle:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDrak,
    },

    titleDescription:{
        paddingTop: 5,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDrak,
    },

    Search: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingTop: 36,
    },
    iconSearch: {
        size: 16,
        color: colors.textDrak,
    },
    borderSearch:{
        flex: 1,
        marginLeft: 10,
        marginRight: 20,
        borderBottomColor: colors.textGray,
        borderBottomWidth: 2,
    },
    textSearch: {
        marginLeft: 12,
        fontSize: 16,
        color: colors.textGray,        
    },

    Categories:{
        paddingTop:30,
    },
    categoriesTitle:{
        marginHorizontal: 20, 
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDrak,
    },
    categoriesWrapper:{
        marginTop: 15,
    },
    categoryItemWrapper:{
        backgroundColor: colors.price,
        marginRight: 20,
        borderRadius: 20,
        alignItems: 'center'
    },
    categoryItemImage:{
        width: 60,
        height:60,
        marginTop: 24,
        marginLeft:22,
        marginRight: 23,
        
    },
    categoryItemTitle:{
        paddingTop: 10,
        color: colors.textDrak,
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
    },
    categoryItemSelected:{
        borderRadius: 20,
        backgroundColor: colors.background,
        height: 26,
        width: 26,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    categoryItemIcon:{
        size: 8,
        color: colors.textDrak,
    },

    Popular:{
        paddingTop: 20,
        marginHorizontal: 20,

    },
    popularText:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDrak,
    },
    popularWrapper:{
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: colors.category,
        borderRadius: 25,
        overflow: 'hidden'
    },
    popularLeft:{

    },
    popularKing:{
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 20,
    },
    popularTextKing:{
        marginLeft: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color:colors.textDrak
    },

    popularTitle:{
        fontSize: 14,
        color: colors.textDrak,
        marginTop: 20,
        marginLeft: 22,
        fontFamily: 'Montserrat-SemiBold',
    },
    popularWeight:{
        fontSize: 12,
        color: colors.textGray,
        marginTop: 5,
        marginLeft: 22,
    },

    popularRight:{
        justifyContent:'center',
        marginLeft: 40,
        
        flex: 1
    },
})