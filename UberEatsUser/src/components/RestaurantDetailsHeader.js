import {View, Text, StyleSheet, Image, FlatList} from "react-native";

const RestaurantDetailsHeader = ({item}) => {
    return (
        <View>
            <Image
                source={{
                    uri: item.image
                }}
                style={styles.image}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>
                    $ {item.deliveryFee} &#8226; {item.minDeliveryTime}-{item.maxDeliveryTime} minutes
                </Text>
                <View style={styles.rating}>
                    <Text>{item.rating}</Text>
                </View>
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
        </View>
    )
}

export default RestaurantDetailsHeader;

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
})