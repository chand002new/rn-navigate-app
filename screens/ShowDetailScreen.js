import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';


const ShowDetailScreen = props => {
    return(
        <View style={styles.screen}><Text>ShowDetailScreen </Text>
        <Button title='Go back'
        onPress={()=>{props.navigation.pop()}}
        />
        </View>
    )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
}
})

export default ShowDetailScreen;
