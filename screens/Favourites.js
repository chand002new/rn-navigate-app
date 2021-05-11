import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Favourites = props => {
    return(
        <View style={styles.screen}><Text>Favourites </Text></View>
    )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
}
})

export default Favourites;
