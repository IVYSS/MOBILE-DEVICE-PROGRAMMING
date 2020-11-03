import React from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealItem";

const  FavoritesScreen = (props) =>{
const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return (
    <MealList listdata={favMeals} navigation={props.navigation} />
  );
  
};

FavoritesScreen.navigationOptions = () => {
  return {
    headerTitle: "Your Favorites",
  };
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FavoritesScreen;