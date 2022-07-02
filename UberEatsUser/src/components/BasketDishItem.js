import {StyleSheet, Text, View} from "react-native";

const BasketDishItem = ({item}) => {
    return (
        <>
            <View style={styles.row}>
                <View style={styles.quantityContainer}>
                    <Text>1</Text>
                </View>
                <Text>{item.name}</Text>
                <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
            </View>
        </>
    )
}

export default BasketDishItem;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
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