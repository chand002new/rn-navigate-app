import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../components/Colors'

const Card = props => {
    return (
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card:{
        padding:10,
        margin:10,
        backgroundColor:Colors.primaryLight,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        shadowRadius:2,
        elevation:2,
        alignItems:'center',
        borderRadius:4,

    }
})