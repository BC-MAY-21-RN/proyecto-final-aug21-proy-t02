import React from 'react';
import {
  MainContainer,
  CustomButton,
  TextButton,
  InputLabel,
  InputText,
  ButtonContainer,
  FlexContainer,
  Layout,
} from '../../components/styled';
import {Image} from 'react-native';
import { Formik } from 'formik';
import {colors} from '../../library/constants/colors';
export const Login = () => {
  return (

    <Formik
      initialValues={{
        email: 'Pool@gmail.com',
        password: '01Vladi*',
      }}
      onSubmit={ values => console.log(values) }>
      {({values}) => (
            <Layout>
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
            <InputText
              value={values.email}
            ></InputText>
            <InputLabel>Password</InputLabel>
            <InputText
              value={values.password}
            ></InputText>
          </FlexContainer>

          <FlexContainer h="25%">
            <CustomButton br="3px solid #59bcf4;" w="100%" h="35%" c={colors.black}>
              <TextButton>Login</TextButton>
            </CustomButton>
            <CustomButton
              br="3px solid black;"
              w="100%"
              h="35%"
              c={colors.blue}
              mbt="15px">
              <TextButton>Sign in</TextButton>
            </CustomButton>
          </FlexContainer>
        </Layout>
      )} 
    </Formik>
  );
};
