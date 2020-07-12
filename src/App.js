import 'react-native-gesture-handler';

import React from 'react';
import { Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#c96a65" />
        <Text style={styles.text}>Hey! :D</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c96a65',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});
