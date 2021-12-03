import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addSites = async (title, description, stars, img) => {
  return await firestore()
    .collection('reactions')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (response.exists) {
        var data = response.data();
        data.favorites.push({
          title: title,
          description: description,
          img: img,
          stars: stars,
        });
        firestore().collection('reactions')
        .doc(auth().currentUser.uid)
        .set(data);
      }
    })
    .catch(err => console.log('Error al agregar a favoritos'))
};


export const fetchData = async (favorite,setFavorite,idUser) => {
  await firestore()
  .collection('reactions')
  .doc(idUser)
  .onSnapshot(querySnapshot => {
    if(querySnapshot._data.favorites.length === 0){
      console.log('No tiene reacciones');
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
      };
    });
    setFavorite(fixedReaction);
  });
}
