import React from 'react';
import {
  Cart,
  CartInfo,
  CartImage,
  InfoTitle,
  TitleCart,
  TitleDescription,
  TouchableOpacity,
  Starts,
  TextStart,
} from '../../containers/Reactions/styled';
import {Image} from 'react-native';
import {InfoTitleCart} from './InfoTitle';
import Icon from 'react-native-ionicons';
import {colors} from '../../library/constants/colors';
export const ReactionList = ({url, name, appraisal, desciption}) => {
  return (
    <Cart h="124px" w="100%" bg={colors.darkGray} dir="row" jc="space-between">
      <CartImage w="40%" mt="10px">
        <Image
          style={{
            width: 140,
            height: 124,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
          source={{uri: url}}
        />
        <Starts>
          <TextStart m fonz="22px" h="50px">
            {appraisal}{' '}
            <Icon
              name="star"
              style={{fontSize: 23, marginLeft: 10, color: colors.white}}
            />
          </TextStart>
        </Starts>
      </CartImage>
      <CartInfo h="100%" w="60%" dir="column" jc="space-between">
        <InfoTitleCart name={name} />
        <TitleDescription
          h="55px"
          fontt="400"
          color={colors.lettersGray}
          w="200px"
          top="-2px"
          left="-5px"
          fonz="14px">
          {desciption}
        </TitleDescription>
      </CartInfo>
    </Cart>
  );
};
