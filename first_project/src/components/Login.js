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
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {getAuth, signInWithEmailAndPassword} from '../firebase';

const sourceLogo = require('../assets/Instagram_logo_white/Instagram_logo_white.png');

const Login = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      passWord: '',
    },
  });
  const [isWrong, setIsWrong] = useState(false);
  const onSubmit = data => {
    console.log(data);
    if (data.email === 'Test' && data.passWord === '123') {
      setIsWrong(false);
      navigation.navigate('Home', data);
    } else {
      setIsWrong(true);
    }
  };

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
            <Image source={sourceLogo} style={styles.logo} />
            <Controller
              control={control}
              // rules={{
              //   required: true,
              // }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  placeholderTextColor="white"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            <Controller
              control={control}
              // rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  placeholderTextColor="white"
                  onBlur={onBlur}
                  secureTextEntry={true}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="passWord"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            {isWrong && (
              <Text style={styles.textError}>Wrong email or password.</Text>
            )}
            <Text>
              <Text style={styles.text}>Forgot your password? </Text>
              <Text style={[styles.hlText, styles.text]}>
                Get help Signing in.
              </Text>
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.textFooter}>
              <Text style={styles.text}>Don't have an account? </Text>
              <Text
                style={[[styles.hlText, styles.text]]}
                onPress={() => navigation.navigate('SignUp')}>
                Sign Up
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
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 9,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 100,
    marginTop: 50,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
  },
  hlText: {
    fontWeight: 'bold',
  },
  textInput: {
    color: 'white',
    margin: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#806FEB',
    height: 50,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  button: {
    backgroundColor: '#775FF2',
    width: '100%',
    height: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFooter: {
    margin: 20,
  },
  textError: {
    color: 'red',
  },
});
export default Login;
