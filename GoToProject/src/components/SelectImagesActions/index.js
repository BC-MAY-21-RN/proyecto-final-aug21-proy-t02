import {Alert} from 'react-native';
import {uploadImage} from '../../library/methods/firebaseUploadImage.';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import nextId from 'react-id-generator';

export const OpenGaleria = (newImage, doAction) => {
  let action = '';
  const options = {
    StorageOptions: {
      path: 'image',
      mediaType: 'photo',
    },
    includeBase64: false,
  };

  action = doAction ? launchImageLibrary : launchCamera;
  
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
      uploadImage(source[0], nextId('image'));
    }
  });
};
