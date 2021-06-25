import * as React from "react";
import { ScrollView, Image } from "react-native";
import {
  randomColorGenerator,
  randomImageGenerator,
} from "../../../common/RewardImageGenerator";
import { cardStyles } from "../../../common/Styles";

import { Text, View } from "../../../components/Themed";

import mockRewards from "../../../mock-data/store.json";

import AirpodsImage from "../../../assets/images/other/airpods-pro.png";
import MomsCo from "../../../assets/images/other/moms-co.png";

export default function StoreScreen() {
  return (
    <ScrollView>
      <View>
        <Text style={cardStyles.cardCarouselTitle}>
          {mockRewards?.featured1?.title}
        </Text>
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

        <Text style={cardStyles.cardCarouselTitle}>
          {mockRewards?.featured2?.title}
        </Text>
        <View
          style={[
            cardStyles.card,
            cardStyles.largeCard,
            { backgroundColor: "#a1785c" },
          ]}
        >
          <Text style={cardStyles.largeCardTopText}>
            {mockRewards?.featured2?.topText}
          </Text>
          <Image
            style={cardStyles.largeCardImage}
            resizeMode="contain"
            source={MomsCo}
          ></Image>
        </View>
      </View>
    </ScrollView>
  );
}
