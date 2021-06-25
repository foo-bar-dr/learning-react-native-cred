import React from "react";
import { Image } from "react-native";
import { Text, View } from "../components/Themed";

const ProfilePictureWithText = ({ image, text}: any) => {
  return (
    <View
      style={{
        display: "flex",
        marginLeft: 15
      }}
    >
      <Image
        style={{
          height: 45,
          borderRadius: 100,
          width: 45,
          marginBottom: 10,
          alignSelf: "center",
        }}
        resizeMode="contain"
        source={image}
      ></Image>
      <Text
        style={{
          fontSize: 10,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default ProfilePictureWithText;
