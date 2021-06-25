import * as React from "react";
import { Button, Image } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { cardStyles } from "../../common/Styles";

import { Text, View } from "../../components/Themed";

import CreditCard from "../../assets/images/other/credit-card.png";
import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View>
        <View
          style={[
            cardStyles.card,
            cardStyles.longCard,
            { backgroundColor: "#333333", height: 180 },
          ]}
        >
          <View
            style={{
              flex: 10,
              backgroundColor: "#333333",
              display: "flex",
              height: "100%",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Claim your cashback now{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 10,
              }}
            >
              Make your first payment and win assured cashback
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 20,
                  width: 100,
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                    padding: 10,
                  }}
                >
                  Pay now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image
            style={cardStyles.longCardImage}
            resizeMode="contain"
            source={CreditCard}
          ></Image>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
