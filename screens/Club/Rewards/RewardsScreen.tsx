import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';

export default function RewardsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Cred Club</Text>
    </View>
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
  