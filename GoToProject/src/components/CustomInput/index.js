import React from 'react';
import Icon from 'react-native-ionicons';
import {ButtonIcon} from '../styled';
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
  shwPassword,
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
          <ButtonIcon pl="88%" pt="45px" onPress={actionPassword}>
            <Icon
              name={shwPassword ? 'eye-off' : 'eye'}
              style={{
                fontSize: 30,
                color: colors.lettersGray,
              }}
            />
          </ButtonIcon>
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
