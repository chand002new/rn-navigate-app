import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Card from '../components/Card';
import Colors from '../components/Colors';




const CategoriesScreen = props => {

    const renderGridItem = (dataItem) => {
        return (<TouchableOpacity
            onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryDetails',
                    params:
                    {
                        CategoryObj : dataItem.item,
                    }
                })
            }}
            style={styles.categoryContainer}>
            <Card style={styles.card} >
                <Text>{dataItem.item.title}</Text>

            </Card>
        </TouchableOpacity>
        )
    }

    return (

        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}

        />

    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'What to Watch',
    headerStyle: {
        backgroundColor: Colors.primaryDark,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryContainer: {
        flex: 1,
        width: '90%',
        padding: 10,
        margin: 10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',

    },
    card: {
        width: 110,
        padding: 10,
        margin: 10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CategoriesScreen;
