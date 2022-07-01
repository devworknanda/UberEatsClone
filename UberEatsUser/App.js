import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import RestaurantItem from "./src/components/RestaurantItem";
import restaurants from "./assets/data/restaurants.json"
import Home from "./src/screens/Home";
import RestaurantDetails from "./src/screens/RestaurantDetails";


export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/*<Home />*/}
            <RestaurantDetails item={restaurants[0]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
