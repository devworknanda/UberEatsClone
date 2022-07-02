import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import orders from "../../assets/data/orders.json"
import restaurants from "../../assets/data/restaurants.json"
import OrderDetailHeader from "../components/OrderDetailHeader";
import DishListItem from "../components/DishListItem";
import OrderListItem from "../components/OrderListItem";
import BasketDishItem from "../components/BasketDishItem";



const OrderDetails = () => {
    return (
        <View>
            <FlatList data={restaurants[0].dishes} renderItem={BasketDishItem}
                      ListHeaderComponent={() => <OrderDetailHeader item={orders[0]} />}
            />
        </View>
    )
};

export default OrderDetails;

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
    menuTitle: {
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 0.5
    }
});