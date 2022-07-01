import restaurants from "../../assets/data/restaurants.json";
import RestaurantItem from "../components/RestaurantItem";
import {FlatList, View, StyleSheet} from "react-native";

const Home = () => {
    return (
        <View style={styles.page}>
            <FlatList data={restaurants} renderItem={RestaurantItem}
                      showsVerticalScrollIndicator={false}/>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
})
