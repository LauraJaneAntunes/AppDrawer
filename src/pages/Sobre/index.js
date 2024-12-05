import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator();

export default function Sobre() { 
  return (
    <View style={styles.container}>
      <Text>Sobre Screen</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});