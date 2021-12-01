import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RowButtons, Buttons} from '../../containers/DetailsScreen/styled';
import {colors} from '../../library/constants/colors';
import {CustomIcon} from '../CustomIcon';
import { addSites } from '../../library/methods/favoritesSites';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const ImgButtos = () => {
  const navigation = useNavigation();
  const title = "Piedra de Acampanada";
  const description = "Aqui va la descripcion";
  const stars = '3';
  const handleHeart = () => {
    console.log("Le dio a agregar a favoritos");
    console.log(title);
    console.log(description);
    addSites(title, description, stars);
    firestore()
    .collection('images')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().id_site);
      });
    });
  };
  return (
    <RowButtons>
      <Buttons
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <CustomIcon name="arrow-back" size={40} color={colors.white} />
      </Buttons>
      <Buttons onPress = { handleHeart }>
        <CustomIcon name="heart" size={35} color={colors.white} />
      </Buttons>
    </RowButtons>
  );
};
