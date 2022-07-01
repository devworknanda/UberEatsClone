import {Image, StyleSheet, Text, View} from "react-native";

const RestaurantItem = ({item}) => (
    <View style={styles.restaurantContainer}>
        <Image
            source={{
                uri: item.image
            }}
            style={styles.image}
        />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>$1.99 15-30 minutes</Text>
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
        aspectRatio: 6/1,
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
    subtitile: {
        color: "grey",
    },
});
