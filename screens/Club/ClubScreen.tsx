import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
