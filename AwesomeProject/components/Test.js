import { async } from '@firebase/util';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator ,TouchableOpacity} from 'react-native';
import axios from 'axios';
// import {  } from 'react-native-gesture-handler';

const Test = () =>{
    const [data,setData]= useState([])
    const [isLoad,setIsLoad] = useState(true)




    useEffect(()=>{
        // getList();
        // console.log('use Effect')
    })

    getList =()=>{
        // console.log('get list')
        fetch('https://remotemysql.com/phpmyadmin/index.php?db=EskUSL83Cb')
        .then((response) =>{
            // console.log('response'+ response)
            response.json()
            // response = JSON.parse(response)
            // console.log(response)
            // console
        })
        .then((json) =>{
            // console.log(json)
            setData(json)
        })
        .catch((error)=> console.log('Loi ' + error))
        .finally(()=>{
            console.log('data: '+ data)
            // setIsLoad(false)
        })
    }

    setAPI = async  () =>{
        console.log('alo')
        await fetch('https://webhook.site/849fac0b-6357-4d08-9cdd-71ea38d66064', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                alo: 'alo',
                
            })
        })
        .then(()=>console.log('Tanh cong'))
        .catch((error)=> console.log(error))
        .finally(()=>console.log('post thanh cong'));
    }

    postMySql=()=>{
        var url = 'http://172.20.10.5:3000/data';
        axios.post(url,{
            user: 'sinh vien 4',
            pass: 'pass4'
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        });
    }

    getMySql=()=>{
        var url = 'http://172.20.10.5:3000/data';
        axios.get(url)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    return(
        <View>
            <TouchableOpacity onPress={getList}>
                <View style={{height:50, width:50,margin:50,backgroundColor:'pink'}}>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={getMySql}>
                <View style={{height:50, width:50,margin:50,backgroundColor:'pink'}}>
                </View>
            </TouchableOpacity>

        {/* {isLoad ?<ActivityIndicator/>:
        <>
            <TouchableOpacity onPress={setAPI}>
                <View style={{backgroundColor:'pink', height:50, width:100,margin:50}}>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={getList}>
                <View style={{backgroundColor:'pink', height:50, width:100,margin:50}}>

                </View>
            </TouchableOpacity>

            <Text>
                {data}
            </Text> */}
            {/* {
                data.movies.map((item)=>
                {
                    return(
                        <View key={item.id}>
                            <Text>{item.title}</Text>
                        </View>
                    )
                })
            } */}
        {/* </> */}
        {/* } */}

        {/* <ActivityIndicator/> */}
            {/* <Text>
                {data.title}
            </Text>
            <TouchableOpacity onPress={getList}>
                <View style={{height:50, width:100,backgroundColor:'pink'}}>
                    <Text>Touch to</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

export default Test