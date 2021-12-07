import React from 'react';
import {Cart,CartImage,Starts,TextStart} from '../../containers/Reactions/styled';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import { CartInfo } from './cartInfo';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import {colors} from '../../library/constants/colors';
export const ReactionList = ({idSite, id_images, description, img, stars, title}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>{ navigation.navigate('DetailsScreen', {
         urlImage: img,
          idSite: idSite,
          id_images:id_images
          }); }}>
      <Cart h="124px" w="100%" bg={colors.darkGray} dir="row" jc="space-between">
        <CartImage w="40%" mt="10px">
          <Image style={styles.img} source={{uri: img}} />
          <Starts>
            <TextStart fonz="22px" h="50px">
              {stars} <Icon name="star" style={{fontSize: 23, marginLeft: 10, color: colors.white}} />
            </TextStart>
          </Starts>
        </CartImage>
        <CartInfo title={title} description={description}/>
      </Cart>
    </TouchableOpacity>
  );
};
