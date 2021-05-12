import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Card from "./Card";

const GridItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={styles.categoryContainer}
    >
      <View style={styles.bevel}>
        <Card style={(styles.card, { backgroundColor: props.bgColor })}>
          <Image
            source={props.imageURI}
            style={styles.image}
          />
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    categoryContainer: {
        flex:1,
        width: '90%',
        padding: 1,
        margin: 1,
        
        alignItems: "center",
        justifyContent: 'space-evenly',

    },
    card: {
        
        padding: 0,
        margin: 1,
        height:150,
        width:150,
        borderRadius:75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        
        height:120,
        width:120,
        
        resizeMode:'contain',

      },
      bevel: {
        
        shadowColor:'white',
        shadowOffset:{width:-4, height:-4},
        shadowOpacity:0.2,
        shadowRadius:4,
        elevation:2,
        
      },
});

export default GridItem;