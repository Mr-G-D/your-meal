import {
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";
import { localRestaurants } from "../components/RestaurantItem";
import axios from "axios";

const encodedParams = new URLSearchParams();
encodedParams.append("language", "en_US");
encodedParams.append("limit", "30");
encodedParams.append("location_id", "297704");
encodedParams.append("currency", "USD");
console.log(encodedParams);
const Home = () => {
  const options = {
    method: "POST",
    url: "https://worldwide-restaurants.p.rapidapi.com/search",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "bd7fe14db0msh3feb308a98ca1dbp128d2ejsn6d48980f26d1",
      "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
    },
    ...encodedParams,
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
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
