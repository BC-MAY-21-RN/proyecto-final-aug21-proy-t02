import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const login = async (email, password, navigation, setStatus) => {
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => {
      console.log('Ingresó');
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
        navigation.navigate("Home");
      }, 2000);
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        console.log("wrong password")
      }

      if (error.code === 'auth/user-not-found') {
        console.log('wrong email')
      }
    });
};

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
