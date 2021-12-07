import firestore from '@react-native-firebase/firestore';
export const detailsSite = (idSite, setDataDetails, setCoordinatesLoaded) => {
  firestore()
    .collection('sites')
    .doc(idSite)
    .get()
    .then(resourceSites => {
      setDataDetails(resourceSites._data);
      setCoordinatesLoaded(true);
    })
    .catch(error => Alert.alert('Something went wrong'));
};
