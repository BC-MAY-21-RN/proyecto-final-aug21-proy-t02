import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export const login = async (email, password, navigation, setStatus) => {
  setStatus(true);
  return await auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
      setTimeout(() => {
        setStatus(false);
        navigation.navigate("Home");
      }, 2000);
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        Alert.alert("wrong password");
      }

      if (error.code === 'auth/user-not-found') {
        Alert.alert('wrong email');
      }
    });
};

export const register = async (email, password, username ) => {
  return await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {     
      user
        .updateProfile({displayName: username})
        .then(() => createUserData());
    })
    .catch(error => {
      Alert.alert('Sorry something went wrong :', error);
    });
};

const createUserData = () => {
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore().collection('users').doc(auth().currentUser.uid).set({
          name: auth().currentUser.displayName,
          privacityAccepted: false,
        });
      }
    });
};
