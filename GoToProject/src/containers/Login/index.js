import React from 'react';
import {
  MainContainer,
  CustomButton,
  TextButton,
  InputLabel,
  InputText,
  ButtonContainer,
  FlexContainer,
} from '../../components/styled';
import {Image} from 'react-native';
import {Text} from 'react-native';
import {colors} from '../../library/constants/colors';
export const Login = () => {
  return (
    <MainContainer>
      <FlexContainer  h="50%">
        <Image
          style={{
            width: 350,
            height: 350,
          }}
          source={require('../../library/images/m.jpeg')}
        />
      </FlexContainer>

      <FlexContainer h="25%" alin="flex-start">
        <InputLabel>Email</InputLabel>
        <InputText></InputText>
        <InputLabel>Password</InputLabel>
        <InputText></InputText>
      </FlexContainer>

      <FlexContainer h="25%">
        <CustomButton br="3px solid #59bcf4;" w="100%" h="40%" c={colors.black}>
          <TextButton>Login</TextButton>
        </CustomButton>
        <CustomButton
          br="3px solid black;"
          w="100%"
          h="40%"
          c={colors.blue}
          mbt="15px">
          <TextButton>Sign in</TextButton>
        </CustomButton>
      </FlexContainer>
    </MainContainer>
  );
};
