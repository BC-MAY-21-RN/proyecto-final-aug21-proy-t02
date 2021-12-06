import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
export const addSites = async (idSite, id_images, title, description, stars, img) => {
  return await firestore()
    .collection('reactions').doc(auth().currentUser.uid).get()
    .then(response => {
      if (response.exists) {
        var data = response.data();
        data.favorites.push({
          idSite: idSite,
          id_images:id_images,
          title: title,
          description: description,
          img: img,
          stars: stars,
        });
        firestore().collection('reactions').doc(auth().currentUser.uid).set(data);
      }
    }).catch(err => Alert.alert('Error al agregar a favoritos'))
};
export const fetchData = async (setFavorite,idUser) => {
  await firestore().collection('reactions').doc(idUser).get()
  .then(querySnapshot => {
    if(querySnapshot._data.favorites.length === 0){
      Alert.alert('No tiene reacciones');
      return;
    }
    const reaction = [];
    querySnapshot._data.favorites.forEach(documentSnapshot => {
      reaction.push({
        ...documentSnapshot,
        key: documentSnapshot.id,
      });
    });
    const fixedReaction = reaction.map( re => {
      return {
        description: re.description,
        img: re.img,
        stars: re.stars,
        title: re.title,
        idSite:re.idSite,
        id_images:re.id_images,
      };
    });
    setFavorite(fixedReaction);
  })
  .catch(error => Alert.alert(error));
}
