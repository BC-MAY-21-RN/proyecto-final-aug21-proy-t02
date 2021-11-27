import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';
export const uploadImage = async (uri, filename) => {
  const reference = storage().ref(filename);
  const task = reference.putFile(uri);
  
  task.then(() => {
    Alert.alert('The image has been uploaded correctly');
    getUrlFirebase(filename);
  });
  task.catch(err => Alert.alert('Sorry an error occurred ', err));
};

const getUrlFirebase = async uri => {
  let url = await storage().ref(uri).getDownloadURL();
};
