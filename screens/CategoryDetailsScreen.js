import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import CategoriesScreen from './CategoriesScreen';


const CategoriesDetailsScreen = props => {
    

    return(
        <View style={styles.screen}><Text>CategoriesDetailsScreen </Text>
        <Button title='Go to Show Details'
        onPress={()=>{props.navigation.push('ShowDetail')}}
        />
        
        </View>
    )
}

CategoriesDetailsScreen.navigationOptions = navObj => {
    const catObj = navObj.navigation.getParam('CategoryObj');
    
    
     return (
        {headerTitle: catObj.title})

}

const styles = StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
}
})

export default CategoriesDetailsScreen;
