import {View, Text, StyleSheet, Image} from "react-native";

import {Ionicons} from "@expo/vector-icons"
import DishListItem from "../components/DishListItem";

const RestaurantDetails = ({item}) => {
    return (
        <View>
            <View style={styles.restaurantContainer}>
                <Image
                    source={{
                        uri: item.image
                    }}
                    style={styles.image}
                />

                <Ionicons
                    name="arrow-back-circle" size={45}
                    color="white"
                    style={styles.iconContainer}
                />

                <View style={styles.container}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subtitle}>
                        $ {item.deliveryFee} &#8226; {item.minDeliveryTime}-{item.maxDeliveryTime} minutes
                    </Text>
                    <View style={styles.rating}>
                        <Text>{item.rating}</Text>
                    </View>
                </View>

            </View>
            <DishListItem />
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