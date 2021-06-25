import * as React from "react";
import { Button, Image } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { cardStyles } from "../../common/Styles";

import { Text, View } from "../../components/Themed";

import mockRewards from "../../mock-data/store.json";

import ProfilePicture from "../../assets/images/user-vector.png";
import Story from "../../assets/images/stories-vector.jpg";
import NotificationIcon from "../../assets/images/notification-icon.jpg";
import ControlIcon from "../../assets/images/control-icon.jpg";

import AirpodsImage from "../../assets/images/other/airpods-pro.png";
import CreditCard from "../../assets/images/other/credit-card.png";
import Gift from "../../assets/images/rewards/gifts.png";

import ProfilePictureWithText from "../../common/ProfilePictureWithText";

import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View
        style={{
          height: 50,
          display: "flex",
          flexDirection: "row",
          margin: 25,
          justifyContent: "space-between",
        }}
      >
        {/* <View
          style={{
            display: "flex",
          }}
        >
          <Image
            style={{
                height: 45,
                borderRadius: 22.5,
                width: 45,
                marginBottom: 10
            }}
            resizeMode="contain"
            source={ProfilePicture}
          ></Image>
          <Text style={{
              fontSize: 10,
              textAlign: 'center'
          }}>Profile</Text>
        </View> */}
        <ProfilePictureWithText image={ProfilePicture} text="Profile" />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <ProfilePictureWithText image={Story} text="Stories" />
          <ProfilePictureWithText
            image={NotificationIcon}
            text="Notifications"
          />
          <ProfilePictureWithText image={ControlIcon} text="Control" />
        </View>
      </View>
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
                    backgroundColor: "black",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "sans-serif",
                      padding: 10,
                      fontSize: 11,
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

        <View>
          <View
            style={[
              cardStyles.card,
              cardStyles.largeCard,
              { backgroundColor: "#4066E0" },
            ]}
          >
            <Image
              style={cardStyles.largeCardImage}
              resizeMode="contain"
              source={Gift}
            ></Image>
            <Text
              style={[
                cardStyles.largeCardTopText,
                {
                  textAlign: "center",
                },
              ]}
            >
              An assured cashback of 500 is waiting for you
            </Text>

            <Text
              style={[
                cardStyles.largeCardBottomText,
                {
                  margin: 10,
                  fontSize: 11,
                  width: "60%",
                },
              ]}
            >
              You and your friends earn minimum cashback of Rs 500 when your
              friend makes a payment on CRED
            </Text>

            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 20,
                  width: 100,
                  alignItems: "center",
                  backgroundColor: "black",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    padding: 10,
                    fontSize: 11,
                  }}
                >
                  Win now
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={[
              cardStyles.card,
              cardStyles.largeCard,
              { backgroundColor: "#333333" },
            ]}
          >
            <Text style={cardStyles.largeCardTopText}>
              {mockRewards?.featured1?.topText}
            </Text>
            <Image
              style={cardStyles.largeCardImage}
              resizeMode="contain"
              source={AirpodsImage}
            ></Image>
            <Text style={cardStyles.largeCardBottomText}>
              {mockRewards?.featured1?.bottomText}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
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
