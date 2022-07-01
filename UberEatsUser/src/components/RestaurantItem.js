import {Image, StyleSheet, Text, View} from "react-native";

const RestaurantItem = ({item}) => (
    <View style={styles.restaurantContainer}>
        <Image
            source={{
                uri: item.image
            }}
            style={styles.image}
        />
        <View style={styles.row}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>
                $ {item.deliveryFee} &#8226; {item.minDeliveryTime}-{item.maxDeliveryTime} minutes
            </Text>
            <View style={styles.rating}>
                <Text>{item.rating}</Text>
            </View>
        </View>

    </View>
);

export default RestaurantItem;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 2/1,
        marginBottom: 5,
    },
    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    subtitle: {
        color: "grey",
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    rating: {
        marginLeft: "auto",
        backgroundColor: "lightgrey",
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
});
