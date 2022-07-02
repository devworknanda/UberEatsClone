import {StyleSheet, View, Text, FlatList} from "react-native";
import OrderListItem from "../components/OrderListItem";

import orders from "../../assets/data/orders.json"

const Orders = () => {
    return (
        <>
            <View>
                <FlatList data={orders} renderItem={OrderListItem} />
            </View>
        </>
    )
};

export default Orders;

const styles = StyleSheet.create({

});