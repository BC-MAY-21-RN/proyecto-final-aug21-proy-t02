import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
export const ShowSites = async setDataImages => {
  let dataImages = [];
  let getData = {};
  try {
    let resource = await firestore().collection('images').get();
    resource.forEach(doc => {
      firestore()
        .collection('sites')
        .doc(doc.data().id_site)
        .get()
        .then(resourceSites => {
          getData = {
            id_Image: doc.id,
            id_site: resourceSites.id,
            title: resourceSites._data.title,
            url_image: doc.data().name_imageOne,
          };
          dataImages[dataImages.length] = getData;
          if (resource._docs.length === dataImages.length) { setDataImages(dataImages);}
        }).catch(error => Alert.alert('Something went wrong'));
    });
  } catch (error) { Alert.alert('Something went wrong');
  }
};
