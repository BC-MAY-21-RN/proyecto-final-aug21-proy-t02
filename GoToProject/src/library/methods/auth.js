import auth from '@react-native-firebase/auth';

export const register = async (email, password, username) => {
  return await auth()
  .createUserWithEmailAndPassword(email, password)
  .then(({user}) => {
    user
      .updateProfile({displayName: username})
      .then(() => resolve('User created & signed in'))
  })
  .catch(error => {
    if(error.code === 'auth/email-already-in-use'){
      reject('That email address is already in use!');
    }
  });
};
