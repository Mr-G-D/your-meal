import {
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";
import { localRestaurants } from "../components/RestaurantItem";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
        }}
      >
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurants={localRestaurants} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
