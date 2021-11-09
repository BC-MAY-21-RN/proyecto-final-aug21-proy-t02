import {Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export const OpenGaleria = (setImageUri, doAction) => {
  let action = '';
  const options = {
    StorageOptions: {
      path: 'image',
      mediaType: 'photo',
    },
    includeBase64: true,
  };
  if (doAction == true) {
    action = launchImageLibrary;
  } else {
    action = launchCamera;
  }
  return action(options, res => {
    // console.log('response = ', res);
    if (res.didCancel) {
      Alert.alert('User cancel the image Piker');
    } else if (res.error) {
      Alert.alert('Image Piker has error', res.error);
    } else if (res.ButtonCustom) {
      console.log('you can use the button', res.ButtonCustom);
    } else {
      const source =
        res.assets &&
        res?.assets.map(({uri}) => {
          return uri;
        });
      setImageUri(source[0]);
    }
  });
};
