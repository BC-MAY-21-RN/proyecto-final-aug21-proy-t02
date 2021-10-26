import React from 'react';
import {
  CustomButton,
  TextButton,
  InputLabel,
  InputText,
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
      >
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
            <CustomButton br="3px solid black;" h="35%"             mbt="15px">
              <TextButton>Sign in</TextButton>
            </CustomButton>
          </FlexContainer>
        </Layout>
      )} 
    </Formik>
  );
};
