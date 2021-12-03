import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {uploadImage} from './firebaseUploadImage.';
export const createSite = (data, images, spiner) => {
  spiner(true);
  const {latitude, length, siteDescription} = data;
  const {costs, workingDays} = data.dataInfo;
  const {categories, phone, siteName} = data.dataInfo.dataWork;
  try { firestore().collection('sites').add({
        category: categories,
        coust: costs,
        description: siteDescription,
        hearts: 500,
        id: 52,
        location: `${(latitude, length)}`,
        phone: phone,
        schedules_close: '09:25:00 .am',
        schedules_open: '10:02:05 .pm',
        stars: 5,
        title: siteName,
        views: '100',
        wirking_days: workingDays,
      })
      .then(response => {
        const uuid = response._documentPath._parts[1];
        uploadImage(images, uuid, spiner);
      });
  } catch (error) { Alert.alert('Sorry something went wrong :', error); }
};
