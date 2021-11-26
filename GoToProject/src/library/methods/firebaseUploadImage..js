import storage from '@react-native-firebase/storage';

export const uploadImage = async (uri, filename) => {
  const reference = storage().ref(filename);
  const task = reference.putFile(uri);
  
  task.then(() => {
    console.log('Image uploaded to the bucket!');
    getUrlFirebase(filename);
  });
  task.catch(err => console.log('this is an err', err));
};

const getUrlFirebase = async uri => {
  let url = await storage().ref(uri).getDownloadURL();
  console.log(url);
};
