import React, { useEffect, useState } from 'react';
import {Layout} from '../../components/styled';
import reactions from '../../library/images/reactions.json';
import {ScrollView, View} from 'react-native';
import {Menu} from '../../components/menu';
import {ReactionList} from '../../components/Reactions';


import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const Reactions = () => {

  const [favorite, setFavorite] = useState([]);
  const idUser = auth().currentUser.uid;

  useEffect(() => {
    const fetchData = async () => {
      const subscriber = await firestore()
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
        // console.log(`reactions: < ${JSON.stringify(favorite)} >`);
      });
    }
    fetchData();
  }, [idUser]);

  // console.log(favorite);

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
