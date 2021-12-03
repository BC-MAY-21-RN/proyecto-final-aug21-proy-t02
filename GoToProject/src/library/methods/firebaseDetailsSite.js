import firestore from '@react-native-firebase/firestore';
export const detailsSite = (idSite, setDataDetails) => {
  firestore()
    .collection('sites')
    .doc(idSite)
    .get()
    .then(resourceSites => {
      setDataDetails(resourceSites._data);
    })
    .catch(error => Alert.alert('Something went wrong'));
};
