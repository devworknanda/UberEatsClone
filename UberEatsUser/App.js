import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import RestaurantItem from "./src/components/RestaurantItem";
import restaurants from "./assets/data/restaurants.json"


export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <RestaurantItem item={restaurants[0]}/>
            <RestaurantItem item={restaurants[1]}/>
        </View>
    );
}

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
