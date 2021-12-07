import firestore from '@react-native-firebase/firestore';
export const getAllImages = async (id_Image,setImages) => {
  const dataImages=[];
  await firestore()
    .collection('images')
    .doc(id_Image)
    .get()
    .then(resourceImages => {
      dataImages?.push(resourceImages._data);
      setImages(dataImages);
    })
    .catch(error => Alert.alert('Something went wrong'));
};
