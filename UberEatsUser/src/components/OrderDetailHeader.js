import {Image, StyleSheet, Text, View} from "react-native";

const OrderDetailHeader = ({item}) => {
    return (
        <View>
            <Image
                source={{
                    uri: item.Restaurant.image
                }}
                style={styles.image}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{item.Restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    {item.status} &#8226; 2 days ago
                </Text>
                <Text style={styles.menuTitle}>Your Orders</Text>
            </View>
        </View>
    )
};

export default OrderDetailHeader

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