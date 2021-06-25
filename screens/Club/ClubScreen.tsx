import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RewardsScreen from './Rewards/RewardsScreen';
import StoreScreen from './Store/StoreScreen';
import TravelScreen from './Travel/TravelScreen';

export default function ClubScreen() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Welcome to Cred Club</Text>
    // </View>
    <ClubTabs />
  );
}


const Tab = createMaterialTopTabNavigator();

function ClubTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Travel" component={TravelScreen} />
    </Tab.Navigator>
  );
}
