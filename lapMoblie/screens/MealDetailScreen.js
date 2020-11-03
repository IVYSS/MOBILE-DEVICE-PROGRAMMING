import React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";


const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const foodId = props.navigation.getParam("categoryId");
  const showStep = MEALS.find((cat) => cat.id === foodId);


  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          style={styles.stretch}
          source={showStep.imageUrl}
        />
        <br />


        <View style={{ justifyContent: "space-between", flexDirection: "row", paddingLeft: "10%" }}>
          <View style={{ flex: 1, }}>
            <Text>{showStep.duration}M</Text>
          </View>
          <View style={{ flex: 1, }}>
            <Text>{showStep.complexity.toUpperCase()}</Text>
          </View>
          <View style={{ flex: 1, }}>
            <Text>{showStep.affordability.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.viewFont}>
          <Text style={styles.fontHerder}>Ingredients </Text>
        </View>
        <br />
        <View style={{ ...styles.center }}>
          <Text>{showStep.title}</Text>
          <Text>{showStep.steps}</Text>
          <Button
            title="Go Back to Categories"
            onPress={() => {
              props.navigation.popToTop();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const foodId = navigationData.navigation.getParam("categoryId");
  console.log(foodId);

  const selectMeals = MEALS.find((cat) => cat.id === foodId);
  console.log("selectMeals: ", selectMeals);

  return {
    headerRight: () => {
      return (
        <HeaderButtons>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    headerTitle: selectMeals.title,
  };
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  stretch: {
    width: "100%",
    height: 500,
    top: 0,
    resizeMode: 'stretch',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  mealRow: {
    flexDirection: "row",
  },
  center: {
    alignItems: "center",
  },
  fontHerder: {
    fontSize: 15,
    fontWeight: "bold",
  },
  viewFont: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  }, 
});

export default MealDetailScreen;
