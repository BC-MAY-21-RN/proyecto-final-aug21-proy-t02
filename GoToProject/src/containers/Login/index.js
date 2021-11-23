import React, {useState} from 'react';
import {
  ButtonIcon,
  ImageLabel,
  FlexContainer,
  Layout,
} from '../../components/styled';
import Icon from 'react-native-ionicons';
import {Image} from 'react-native';
import {Formik} from 'formik';
import { Inputs } from '../../library/constants/methods';
import { loginInputs } from '../../library/constants/dataForm';
import { ButtonCustom } from '../../components/ButtonCustom';
import { logInSchema } from '../../library/constants/validationSchema';
export const Login = ({navigation}) => {
  const [shwPassword, setShowPassword] = useState(true);
  /* at the moment it is only for testing */
  const handleLogIn = () => navigation.navigate('Home');
  const handleInputPassword = () => {
    setShowPassword(!shwPassword);
    loginInputs[1].secureTextEntry=!shwPassword;
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={ logInSchema }
      onSubmit={ values => handleLogIn(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <FlexContainer h="45%">
            <Image
              style={{ width: 340, height: 340,top: 10, }}
              source={require('../../library/images/m.jpeg')}
            />
            <ImageLabel>Go out with your family to new places</ImageLabel>
          </FlexContainer>
            <Inputs 
              obj = {loginInputs}
              handleChange={handleChange}
              errors={errors} 
              touched={touched} 
              values={values}
              showEye={true}
              actionPassword={handleInputPassword}
              showPassword={shwPassword}
            />
            <FlexContainer  h="20%" jc="center" mt="25px">
              <ButtonCustom onPress={handleSubmit} h="56%" color={true} mt="0px" mbt="0" text="Login" hb="80%"/>
              <ButtonCustom onPress={()=>{ navigation.navigate('SignUp'); }} h="55%"  mt="0px" mbt="0" text="Sign in" hb="80%"/>
            </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
