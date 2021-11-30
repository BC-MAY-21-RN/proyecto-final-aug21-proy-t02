import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addSites = (title, description) => {
  firestore()
    .collection('reactions')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (response.exists) {
        var data = response.data();
        data.favorites.push({
          title: title,
          description: description,
          img: 'imagen',
        });
        firestore().collection('reactions')
        .doc(auth().currentUser.uid)
        .set(data);
      }
    })
    .catch(err => console.log('Error al agregar a favoritos'))
};
