import {StyleSheet, Text, View, Image} from "react-native";

const OrderListItem = ({item}) => {
    return (
        <>
            <View style={styles.row}>
                <Image source={{uri: item.Restaurant.image}} style={styles.restIm}/>
                <View>
                    <Text style={styles.name}>{item.Restaurant.name}</Text>
                    <Text>3 items $38.25</Text>
                    <Text>2 days ago &#8226; {item.status}</Text>
                </View>
            </View>
        </>
    )
};

export default OrderListItem;

const styles = StyleSheet.create({
    restIm: {
        width: 75,
        height: 75,
        marginRight: 5,
    },
    row: {
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
    },
    name: {
        fontWeight: "600",
        fontSize: 16,
    },
    price: {

    },
    time: {

    },
});