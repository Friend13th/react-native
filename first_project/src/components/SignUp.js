/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
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
import {useForm, Controller} from 'react-hook-form';

const sourceLogo = require('../assets/plus_photo.imageset/plus_photo2x.png');

const SignUp = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rePassword: '',
      userName: '',
      fullName: '',
    },
  });
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = data => {
    console.log('test');
    console.log(data);
    console.log(password);
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
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
            <Controller
              control={control}
              rules={{
                required: true,
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              }}
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
            {errors.email && <Text style={styles.textError}>Wrong email</Text>}
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="white"
                  placeholder="Password"
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            <Controller
              control={control}
              rules={{
                required: true,
                validate: value =>
                  value === password.current || 'The passwords do not match',
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="white"
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="rePassword"
            />
            {errors.rePassword && (
              <Text style={styles.textError}>{errors.rePassword.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="white"
                  placeholder="Full name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="fullName"
            />
            {errors.fullName && (
              <Text style={styles.textError}>This field is required</Text>
            )}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="white"
                  placeholder="User name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="userName"
            />
            {errors.userName && (
              <Text style={styles.textError}>This field is required</Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}>
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
  textError: {
    color: 'red',
    alignSelf: 'stretch',
  },
});
export default SignUp;
