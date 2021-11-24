import React, {useState} from 'react';
import {Layout} from '../../components/styled';
import {Formik} from 'formik';
import {ButtonCustom} from '../../components/ButtonCustom';
import { signUpInputs } from '../../library/constants/dataForm';
import { signUpSchema } from '../../library/constants/validationSchema';
import { Inputs } from '../../library/constants/methods';
import { FlexContainer } from '../../components/styled';
import { RecordHeader } from '../../components/RecordHeader';

export const SignUp = ({navigation}) => {

  /* at the moment it is only for testing */
  const handleSignIn = (values) =>{
    navigation.navigate('SelectLocation', {values})
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={ signUpSchema }
      onSubmit={ values => handleSignIn(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <RecordHeader  route="Login"  title="Sign Up" />
          <Inputs 
            obj = {signUpInputs}
            handleChange={handleChange}
            errors={errors} 
            touched={touched} 
            values={values}
          />
          <FlexContainer  h="20%" jc="center" mt="10px">
            <ButtonCustom onPress={handleSubmit} h="50%" mt="200px" mbt="0" text="Next" hb="75%"/>
          </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
