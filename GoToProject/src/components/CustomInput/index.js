import React from 'react';
import Icon from 'react-native-ionicons';
import {ButtonIcon} from '../styled';
import {ShowPassword} from './ShowPassword';
import {colors} from '../../library/constants/colors';
import {FlexContainer, InputLabel, InputText, ContainerImput} from '../styled';
export const CustomInput = ({
  label,
  name,
  onChangeText,
  value,
  hasErrors,
  hasTouched,
  secureTextEntry,
  actionPassword,
  showPassword,
  showEye,
  eye,
}) => {
  return (
    <FlexContainer h="15%" alin mbt="0" jc="center">
      <ContainerImput>
        <InputLabel>{label}</InputLabel>
        <InputText
          height="50px"
          onChangeText={onChangeText}
          value={value}
          name={name}
          secureTextEntry={secureTextEntry}
        />
        {eye && showEye ? (
          <ShowPassword showPassword={showPassword} action={actionPassword} />
        ) : null}
      </ContainerImput>
      {hasErrors && hasTouched ? (
        <InputLabel top="-15px" color={colors.red}>
          {hasErrors}
        </InputLabel>
      ) : null}
    </FlexContainer>
  );
};
