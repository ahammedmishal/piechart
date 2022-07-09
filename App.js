import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Custom from './components/customPieChart'
import FunctionChart from './components/charts'



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style = {styles.container}>
    {/* <Custom/> */}
    <FunctionChart/>
    </View>
  );


}
const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    marginBottom: 20
  }
});

