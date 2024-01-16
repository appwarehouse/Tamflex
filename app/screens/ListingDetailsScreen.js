import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>R100</AppText>
        <View style={styles.useeContainer}>
          <ListItem
            image={require("../assets/ishe.png")}
            title="Ishe Shambare"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  useeContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
