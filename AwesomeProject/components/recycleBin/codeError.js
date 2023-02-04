
    // useEffect (() => {
    //     fetch('https://reactnative.dev/movies.json')
    //     .then((response) => {
    //         // console.log()
    //         response.json()
    //     })
    //     .then((json) => {
    //         console.log('alo')
    //         setData(json)
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    //     .finally(()=>console.log('load finish: '+ data));
    //     // try {
    //     //     const response = await fetch(
    //     //       'https://reactnative.dev/movies.json'
    //     //     );
    //     //     const json = await response.json();
    //     //     return json.movies;
    //     //   } catch (error) {
    //     //     console.error(error);
    //     //   }

    //     // const fetchData = async () => {
    //     //     await fetch('https://reactnative.dev/movies.json')
    //     //     .then((response) => {
    //     //         console.log('response '+ response.json())
    //     //         response.json()
    //     //         })
    //     //     .then((json) => {
    //     //                     console.log(json)
    //     //                     setData(json)
    //     //                 })
    //     // }
        
    //     //   // call the function
    //     // fetchData().catch(console.error);
    //     //     // make sure to catch any error
            

    //     console.log(data)
    // },[]);

    // async function readData (){
    //     console.log('touch')

    //     const response = await fetch('https://reactnative.dev/movies.json');
    //     console.log(response.json())

    //     await response.json().then((response) => 
    //     {      
    //         console.log('loaded')
    //         console.log(response)
    //         // setInfected(response);
    //         // setIsFetched(true);
    //     })


        // fetch('https://reactnative.dev/movies.json')
        // .then((response) => {
        //     console.log('aloo')
        //     response.json()
        // })
        // .then((json)=>{
        //     console.log(json)
        //     // setData(json)
        // })
        // .catch((error)=>console.log(error))
    // }


    {isLoad ? <ActivityIndicator/>:
        <>
        <Text>
                    {data.title}
                    {/* Alo */}
                </Text>
        </>}
        {/* <ActivityIndicator/> */}
            {/* <View> */}
                {/* <Text> */}
                    {/* {data.title} */}
                    {/* Alo */}
                {/* </Text> */}
                {/* <TouchableOpacity onPress={getList}>
                    <View style={{height:50, width:100,backgroundColor:'pink'}}>
                        <Text>Touch to</Text>
                    </View>
                </TouchableOpacity> */}
            {/* </View> */}

            import React, { Component, useEffect, useState } from 'react';
            import { View, Text, ActivityIndicator ,TouchableOpacity} from 'react-native';
            // import {  } from 'react-native-gesture-handler';
            
            const Test = () =>{
                const [data,setData]= useState([])
                const [isLoad,setIsLoad]= useState(true)
            
                getList =()=>{
                    console.log('get list')
                    fetch('https://reactnative.dev/movies.json')
                    .then((response)=>response.json())
                    .then((json)=>{
                        console.log(json)
                        setData(json)            
                    })
                    // .finally(()=>setIsLoad(false))        
                }
            
                useEffect(()=>{
                    // getList();
                })
            
            
                return(
                    <View>
                        <Text>
                            {data.title}
                        </Text>
            
                        <TouchableOpacity onPress={getList}>
                                <View style={{height:50, width:100,backgroundColor:'pink'}}>
                                    <Text>Touch to</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                )
            }
            
            export default Test