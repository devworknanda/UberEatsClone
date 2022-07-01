import {View, Text, StyleSheet, Image, FlatList} from "react-native";

import {Ionicons} from "@expo/vector-icons"
import DishListItem from "../components/DishListItem";

import restaurants from "../../assets/data/restaurants.json"
import RestaurantDetailsHeader from "../components/RestaurantDetailsHeader";

const RestaurantDetails = ({item}) => {
    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => (<RestaurantDetailsHeader item={item}/>)}
                data={item.dishes} renderItem={DishListItem} />
            <Ionicons
                name="arrow-back-circle" size={45}
                color="white"
                style={styles.iconContainer}
            />
        </View>
    )
}

export default RestaurantDetails;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    iconContainer: {
        position: "absolute",
        top: 40,
        left: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
    },
    container: {
        margin: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10,
    },
    subtitle: {
        color: "grey",
        fontSize: 15,
    },
})