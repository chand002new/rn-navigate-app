import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import GridItem from "../components/GridItem";
import Colors from "../components/Colors";

const CategoriesScreen = (props) => {
  const renderGridItem = (dataItem) => {
    const onSelect = () => {
      props.navigation.navigate({
        routeName: "CategoryDetails",
        params: {
          CategoryObj: dataItem.item,
        },
      });
    };
    return (
      <GridItem
        imageURI={{ uri: dataItem.item.imageURI }}
        bgColor={dataItem.item.color}
        onSelect={onSelect}
      />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "What to Watch",
  headerStyle: {
    backgroundColor: Colors.primaryDark,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
  },
});

export default CategoriesScreen;
