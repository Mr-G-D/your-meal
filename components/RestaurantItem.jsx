import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}>
      <View
        style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: "white",
        }}
      >
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const RestaurantImage = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://imgs.search.brave.com/i32NKhABRI9yQaPF5F4ZqIG7yt8BV7OBpuKrdcNlvzU/rs:fit:1200:1129:1/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dXBsb2Fkcy9jaG9y/dXNfYXNzZXQvZmls/ZS80MjEwMTQ3L1Bp/bnR4by0yLjAuanBn",
        }}
        style={{
          width: "100%",
          height: 180,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 20,
        }}
      >
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Farm House
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "grey",
          }}
        >
          30-45 . min
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>4.5</Text>
      </View>
    </View>
  );
};
