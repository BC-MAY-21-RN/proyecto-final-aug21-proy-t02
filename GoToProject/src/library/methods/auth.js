import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const register = async (email, password, username,latitude,length ) => {
  return await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {     
      user
        .updateProfile({displayName: username})
        .then(() => createAditionalData(latitude, length));
    })
    .catch(error => {
      console.log(error)
    });
};

const createAditionalData = (latitude, length) => {
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore().collection('users').doc(auth().currentUser.uid).set({
          name: auth().currentUser.displayName,
          latitudeLocation: latitude,
          lengthLocation: length,
          privacityAccepted: false,
        });
      }
    });
};
