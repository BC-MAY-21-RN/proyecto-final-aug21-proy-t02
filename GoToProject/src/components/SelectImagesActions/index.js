import {Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export const OpenGaleria = (newImage, doAction) => {
  let action = '';
  const options = {
    StorageOptions: {
      path: 'image',
      mediaType: 'photo',
    },
    quality: 0.8,
    includeBase64: true,
  };
  if (doAction == true) {
    action = launchImageLibrary;
  } else {
    action = launchCamera;
  }
  return action(options, res => {
    if (res.didCancel) {
      Alert.alert('User cancel the image Piker');
    } else if (res.error) {
      Alert.alert('Image Piker has error', res.error);
    } else {
      const source =
        res.assets &&
        res?.assets.map(({uri}) => {
          return uri;
        });
      newImage(source[0]);
    }
  });
};
