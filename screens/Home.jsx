import { SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HeaderTabs />
    </SafeAreaView>
  );
};

export default Home;
