import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={{fontSize: 30,}}> Available Filters / Restrictions</Text>

      <Text style={{fontSize: 20}}>
        GlutenFree {"       "}
        <Switch value={isGlutenFree} onValueChange={setIsGlutenFree}></Switch>
      </Text>
      <Text style={{fontSize: 20}}>
        LactoseFree {"       "}
        <Switch value={isLactoseFree} onValueChange={setIsLactoseFree}></Switch>
      </Text>
      <Text style={{fontSize: 20}}>
        Vegan {"            "}
        <Switch value={isVegan} onValueChange={setIsVegan}></Switch>
      </Text>
      <Text style={{fontSize: 20}}>
        Vegetarian {"       "}
        <Switch value={isVegetarian} onValueChange={setIsVegetarian}></Switch>
      </Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    // headerRight: () => {
    //   return (
    //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //       <Item
    //         title="Save"
    //         iconName="ios-"
    //         onPress={() => {
    //           navigationData.navigation.toggleDrawer();
    //         }}
    //       />
    //     </HeaderButtons>
    //   );
    // },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  text: {
    flex: 1,
  }
});

export default FiltersScreen;