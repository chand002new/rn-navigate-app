
import React, { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import  ShowNavigator  from './navigation/ShowNavigator';
import * as Font from 'expo-font';
import   AppLoading  from 'expo-app-loading';

const fetchFonts = () =>{
    return Font.loadAsync({
        'Satisfy': require('./assets/fonts/Satisfy-Regular.ttf')
    });
};


export default function App() {
  
  const [fontLoaded,setFontLoaded] = useState(false);
  if(!fontLoaded)
  {
      return (
      <AppLoading 
      startAsync={fetchFonts} 
      onFinish={()=> setFontLoaded(true)  } 
      onError={(error)=>{console.log(error)}}
      />
      );
}

  return (
   
  <ShowNavigator />
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
