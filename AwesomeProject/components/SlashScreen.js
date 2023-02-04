import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Lottie from 'lottie-react-native';

export default class SlashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Lottie 
                source={require('../assets/json/slash.json')} 
                autoPlay 
                loop 
                resizeMode='contain'
                speed={1}
                // width={500}
                style={{height:500,width:500}}          
                onAnimationFinish={()=>{
                    this.props.navigation.replace('Home')
                }}      
            />
        </View>
        );
    }
}
