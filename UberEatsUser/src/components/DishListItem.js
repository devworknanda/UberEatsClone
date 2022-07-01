import {View, Text, StyleSheet, Image} from 'react-native';

const DishListItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            {item.image && (
                <Image source={{uri: item.image}} style={styles.image}/>
            )}
        </View>
    );
}

export default DishListItem;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        flexDirection: "row"
    },
    description: {
        color: "gray",
        marginVertical: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0.5,
    },
    price: {
        fontSize: 16,
    },
    image: {
        height: 100,
        aspectRatio: 1,
    },
})

