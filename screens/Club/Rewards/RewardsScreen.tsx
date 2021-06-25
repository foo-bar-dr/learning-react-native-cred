import * as React from "react";
import { ScrollView, Image } from "react-native";
import {
  randomColorGenerator,
  randomImageGenerator,
} from "../../../common/RewardImageGenerator";
import { cardStyles } from "../../../common/Styles";

import { Text, View } from "../../../components/Themed";

import mockRewards from "../../../mock-data/rewards.json";


export default function RewardsScreen() {
  return (
    <ScrollView>
      <ScrollView horizontal={true} nestedScrollEnabled={true}>
        {mockRewards?.cashback1?.map((reward) => (
          <View
            style={[
              cardStyles.card,
              cardStyles.longCard,
              { backgroundColor: randomColorGenerator() },
            ]}
          >
            <Text style={cardStyles.longCardText}>{reward?.title}</Text>
            <Image
              style={cardStyles.longCardImage}
              resizeMode="contain"
              source={randomImageGenerator()}
            ></Image>
          </View>
        ))}
      </ScrollView>

      <ScrollView horizontal={true}>
        {mockRewards?.offers?.map((reward) => (
          <View
            style={[
              cardStyles.card,
              cardStyles.squareCard,
              { backgroundColor: randomColorGenerator() },
            ]}
          >
            <Text
              style={[
                cardStyles.squareCardText,
                {
                  marginBottom: 10,
                },
              ]}
            >
              {reward?.title}
            </Text>
            <Image
              style={cardStyles.squareCardImage}
              resizeMode="contain"
              source={randomImageGenerator()}
            ></Image>
          </View>
        ))}
      </ScrollView>

      <ScrollView horizontal={true}>
        {mockRewards?.cashback2?.map((reward) => (
          <View
            style={[
              cardStyles.card,
              cardStyles.longCard,
              { backgroundColor: randomColorGenerator() },
            ]}
          >
            <Text style={cardStyles.longCardText}>{reward?.title}</Text>
            <Image
              style={cardStyles.longCardImage}
              resizeMode="contain"
              source={randomImageGenerator()}
            ></Image>
          </View>
        ))}
      </ScrollView>

      <ScrollView horizontal={true}>
        {mockRewards?.rewards?.map((reward) => (
          <View
            style={[
              cardStyles.card,
              cardStyles.squareCard,
              { backgroundColor: randomColorGenerator() },
            ]}
          >
            <Image
              style={[
                cardStyles.squareCardImage,
                {
                  marginBottom: 10,
                },
              ]}
              resizeMode="contain"
              source={randomImageGenerator()}
            ></Image>
            <Text style={cardStyles.squareCardText}>{reward?.title}</Text>
          </View>
        ))}
      </ScrollView>

{/* 

      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <Text>Reward 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Reward 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Reward 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Reward 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Reward 1</Text>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Cred Club</Text>
      </View> */}
    </ScrollView>
  );
}
