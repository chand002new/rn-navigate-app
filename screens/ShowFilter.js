import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ShowFilter = props => {
    return(
        <View style={styles.screen}><Text>ShowFilter </Text></View>
    )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
}
})

export default ShowFilter;
