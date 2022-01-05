/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const navigation = useNavigation();
  const sourceLogo = require('../assets/plus_photo.imageset/plus_photo2x.png');
  let email = '';
  let pass = '';
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={styles.scrolView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <LinearGradient
        colors={['#A853DF', '#A953DE', '#0F76FB']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.body}>
            <TouchableOpacity>
              <Image source={sourceLogo} style={styles.logo} />
            </TouchableOpacity>
            <TextInput
              placeholder="Email"
              placeholderTextColor="white"
              style={styles.textInput}
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="Fullname"
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="Username"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={(email, pass) => {}}>
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.textFooter}>
              <Text style={styles.text}>Already have an account? </Text>
              <Text
                style={[[styles.hlText, styles.text]]}
                onPress={() => navigation.navigate('Login')}>
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  body: {
    padding: 20,
    alignItems: 'center',
    flex: 9,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
  text: {
    color: 'white',
  },
  textInput: {
    color: 'white',
    margin: 10,
    padding: 10,
    height: 50,
    width: '100%',
    backgroundColor: '#916BE7',
  },
  button: {
    backgroundColor: '#775FF2',
    width: '100%',
    height: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  hlText: {
    fontWeight: 'bold',
  },
  textFooter: {
    margin: 20,
  },
});
export default Login;
