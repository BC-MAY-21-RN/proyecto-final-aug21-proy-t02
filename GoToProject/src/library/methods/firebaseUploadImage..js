import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import nextId from 'react-id-generator';
let saveFirebaseUrl = [];
let counterUris = 0;
let counter = 0;
let newUuid = '';
export const uploadImage = (images, uuid, spiner) => {
  newUuid = uuid;
  for (const index in images) {
    if (images[index]) {
      if (counter === 0) {
        uploadImagesFirebase(images[index], nextId(`${uuid}`), spiner );
      } else {
        setTimeout(() => {
          uploadImagesFirebase(images[index], nextId(`${uuid}`), spiner);
        }, 5010);
      }
      counter++;
    }
  }
};
const uploadImagesFirebase = async (uri, filename, spiner) => {
  const reference = storage().ref(filename);
  const task = reference.putFile(uri);
  task.then(() => {
    getUrlFirebase(filename, spiner);
  });
  task.catch(err => Alert.alert('Sorry an error occurred ', err));
};
const getUrlFirebase = async (uri, spiner) => {
  let url = await storage().ref(uri).getDownloadURL();
  saveFirebaseUrl[counterUris++] = url;
  counterUris === counter
    ? addUriFirebase(saveFirebaseUrl, newUuid, spiner)
    : null;
};
const addUriFirebase = (saveFirebaseUrl, uuid,spiner) => {
  try {
    firestore()
      .collection('images')
      .add({
        id: 0,
        id_site: uuid,
        name_imageFive: saveFirebaseUrl[4] ? saveFirebaseUrl[4] : false,
        name_imageFourt: saveFirebaseUrl[3] ? saveFirebaseUrl[3] : false,
        name_imageOne: saveFirebaseUrl[0],
        name_imageThree: saveFirebaseUrl[2] ? saveFirebaseUrl[2] : false,
        name_imageTwo: saveFirebaseUrl[1] ? saveFirebaseUrl[1] : false,
      })
      .then(() =>spiner(1));
  } catch (error) {
    console.log(error);
    Alert.alert('Sorry something went wrong :', error);
  }
};
