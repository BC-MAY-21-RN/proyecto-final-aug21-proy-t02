import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const register = async (email, password, username) => {
  return await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {     
      user
        .updateProfile({displayName: username})
        .then(() => createAditionalData());
    })
    .catch(error => {
      console.log(error)
    });
};

const createAditionalData = () => {
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore().collection('users').doc(auth().currentUser.uid).set({
          name: auth().currentUser.displayName,
          latitudeLocation: "123",
          lengthLocation: "2220",
          privacityAccepted: false,
        });
      }
    });
};
