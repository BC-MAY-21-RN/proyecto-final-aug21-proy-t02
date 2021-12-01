import React, { useEffect, useState } from 'react';
import {Layout} from '../../components/styled';
import reactions from '../../library/images/reactions.json';
import {ScrollView, View} from 'react-native';
import {Menu} from '../../components/menu';
import {ReactionList} from '../../components/Reactions';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { fetchData } from '../../library/methods/favoritesSites';

export const Reactions = () => {
  const [favorite, setFavorite] = useState([]);
  const idUser = auth().currentUser.uid;
  useEffect(() => {
    fetchData(favorite,setFavorite,idUser);
  }, [idUser]);

  return (
    <Layout aline="flex-start">
      <View style={{ width: '100%', height:'97%'}}>
        <ScrollView style={{width: '100%',marginBottom:20}}>
          {favorite.map((value, index) => {
            return <ReactionList key={index} {...value} />;
          })}
        </ScrollView>
      </View>
      <Menu stateReact="true" />
    </Layout>
  );
};
