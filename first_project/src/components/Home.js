/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = key => {
  const navigation = useNavigation();
  const logOut = key => {
    key = '';
  };
  return (
    <View>
      <Text>This is home screen</Text>
      <TouchableOpacity
        onPress={() => {
          logOut;
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Home;
