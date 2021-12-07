import React, {useEffect, useState} from 'react';
import {Layout} from '../../components/styled';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Menu} from '../../components/menu';
import {colors} from '../../library/constants/colors';
import {Loading} from '../DetailsScreen/styled';
import {ReactionList} from '../../components/Reactions';
import auth from '@react-native-firebase/auth';
import {fetchData} from '../../library/methods/favoritesSites';
export const Reactions = () => {
  const [favorite, setFavorite] = useState([]);
  const idUser = auth().currentUser.uid;
  useEffect(() => {
    fetchData(setFavorite, idUser);
  }, [idUser]);
  return (
    <Layout aline="flex-start">
      {favorite.length === 0 ? (
        <Loading size={90} color={colors.white} style={styles.loading} />
      ) : (
        <>
          <View style={{width: '100%', height: '97%'}}>
            <ScrollView style={{width: '100%', marginBottom: 20}}>
              {favorite.map((value, index) => {
                return <ReactionList key={index} {...value} />;
              })}
            </ScrollView>
          </View>
        </>
      )}
      <Menu stateReact="true" />
    </Layout>
  );
};
const styles = StyleSheet.create({
  loading: { left: 5, top: 150, },
});
