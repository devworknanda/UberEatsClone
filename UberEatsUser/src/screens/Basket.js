import {FlatList, StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

import restaurants from "../../assets/data/restaurants.json"
import BasketDishItem from "../components/BasketDishItem";
const restaurant = restaurants[0];

const Basket = () => {
    return (
        <>
            <View style={styles.page}>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.description}>Your Items</Text>

                <FlatList data={restaurant.dishes} renderItem={BasketDishItem} />
                <View style={styles.separator}/>

                <View style={styles.button}>
                    <Text style={styles.buttonText}>Create Order</Text>
                </View>
            </View>
        </>
    )
}

export default Basket;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 40,
        padding: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10,
        marginBottom: 20,
    },
    description: {
        fontSize: 19,
        fontWeight: "600",
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 50,
    },
    quantity: {
        fontSize: 25,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
    priceText: {
        marginLeft: "auto",
    },
    quantityContainer: {
        backgroundColor: "lightgrey",
        paddingHorizontal: 5,
        marginRight: 10,
        paddingVertical: 2,
        borderRadius: 3,
    },
})