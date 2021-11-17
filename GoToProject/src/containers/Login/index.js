import React, {useState} from 'react';
import {
  CustomButton,
  TextButton,
  ButtonIcon,
  ImageLabel,
  InputLabel,
  InputText,
  FlexContainer,
  Layout,
} from '../../components/styled';
import Icon from 'react-native-ionicons';
import {Image} from 'react-native';
import {Formik} from 'formik';
import {colors} from '../../library/constants/colors';
import { Inputs } from '../../library/constants/methods';
import { loginInputs } from '../../library/constants/dataForm';
import { ButtonCustom } from '../../components/ButtonCustom';
export const Login = ({navigation}) => {
  const [shwPassword, setShowPassword] = useState(true);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <FlexContainer h="50%">
            <Image
              style={{
                width: 350,
                height: 350,
                top: 15,
              }}
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
            />
            <ButtonIcon
              onPress={() => {
                setShowPassword(!shwPassword);
              }}>
              <Icon
                name={shwPassword ? 'eye-off' : 'eye'}
                style={{
                  fontSize: 30,
                  color: colors.lettersGray,
                }}
              />
            </ButtonIcon>
            <FlexContainer  h="20%" jc="center">
              <ButtonCustom ButtonRoute="WorkShedules" h="50%" mt="0px" mbt="0" text="Login" hb="75%"/>
              <ButtonCustom ButtonRoute="WorkShedules" h="50%" mt="0px" mbt="0" text="Next" hb="75%"/>
            </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
