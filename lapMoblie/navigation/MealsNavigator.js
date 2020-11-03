// import คอมโพเนนต์ที่จำเป็น
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const MealsNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }

);

const FavNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoritesScreen },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons  name="ios-restaurant" size={24} color={tabInfo.tintColor} />)
      }
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons  name="ios-star" size={24} color={tabInfo.tintColor} />)
      }
    }
  },
  
});

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
},
);

const MainNavigator = createDrawerNavigator({
  MealsFav: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: "Meals",
    },

  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: "Filters"
    },
  }
},
  {
    contentOptions: { activeTintColor: "red" }
  }
);




export default createAppContainer(MainNavigator);
