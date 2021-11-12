import React, {useState} from 'react';
import {colors} from '../../library/constants/colors';
import {ContainerMenu, ContainerButtons} from './styled';
import {CustomIcons} from './Icons';
export const Menu = ({stateHome=false,stateReact=false}) => {
  return (
    <ContainerMenu>
      <ContainerButtons>
        <CustomIcons name="home" showState={stateHome} screen="Home" />
        <CustomIcons
          name="add-circle"
          screen="AddNewSite"
          designIcon={{fontSize: 50, top: -15, color: colors.white}}
          action=""
        />
        <CustomIcons name="heart" showState={stateReact} screen="Reactions" />
      </ContainerButtons>
    </ContainerMenu>
  );
};
