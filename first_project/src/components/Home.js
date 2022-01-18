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
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FormikPostUploader from './FormikPostUploader';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const sourceLogo = require('../assets/plus_photo.imageset/plus_photo2x.png');

const Home = data => {
  const navigation = useNavigation();
  const logOut = () => {
    // console.log(data);
    navigation.navigate('Login');
  };
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imagePath, setImagePath] = useState('');

  const chooseFile = () => {
    setStatus('');
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true, // do not backup to iCloud
        path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker', storage());
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let path = this.getPlatformPath(response).value;
        let fileName = this.getFileName(response.fileName, path);
        this.setState({imagePath: path});
        this.uploadImageToStorage(path, fileName);
      }
    });

    const getFileName = (name, path) => {
      if (name != null) {
        return name;
      }

      if (Platform.OS === 'ios') {
        path = '~' + path.substring(path.indexOf('/Documents'));
      }
      return path.split('/').pop();
    };

    const uploadImageToStorage = (path, name) => {
      this.setState({isLoading: true});
      let reference = storage().ref(name);
      let task = reference.putFile(path);
      task
        .then(() => {
          console.log('Image uploaded to the bucket!');
          this.setState({
            isLoading: false,
            status: 'Image uploaded successfully',
          });
        })
        .catch(e => {
          setStatus('Something went wrong');
          console.log('uploading image error => ', e);
          this.setState({isLoading: false, status: 'Something went wrong'});
        });
    };
    /**
     * Get platform specific value from response
     */
    const getPlatformPath = ({path, uri}) => {
      return Platform.select({
        android: {value: path},
        ios: {value: uri},
      });
    };

    const getPlatformURI = imagePath => {
      let imgSource = imagePath;
      if (isNaN(imagePath)) {
        imgSource = {uri: this.state.imagePath};
        if (Platform.OS == 'android') {
          imgSource.uri = 'file:///' + imgSource.uri;
        }
      }
      return imgSource;
    };
  };
  return (
    <ScrollView>
      <View style={styles.body}>
        <Text>This is home screen</Text>
        {/* <FormikPostUploader /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            logOut();
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={sourceLogo} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    padding: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 9,
  },
  button: {
    backgroundColor: '#775FF2',
    width: '100%',
    height: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
