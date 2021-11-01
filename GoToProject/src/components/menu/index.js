import React, {useState} from 'react';
import {colors} from '../../library/constants/colors';
import {ContainerMenu, ContainerButtons} from './styled';
import {CustomIcons} from './Icons';
export const Menu = () => {
  const [homeScreen, setHomeScreen] = useState(true);
  const [feedbackScreen, setFeedbackHome] = useState(false);
  return (
    <ContainerMenu>
      <ContainerButtons>
        <CustomIcons name="home" showState={homeScreen} action="" />
        <CustomIcons
          name="add-circle"
          designIcon={{fontSize: 50, top: -15, color: colors.white}}
          action=""
        />
        <CustomIcons name="heart" showState={feedbackScreen} action="" />
      </ContainerButtons>
    </ContainerMenu>
  );
};
