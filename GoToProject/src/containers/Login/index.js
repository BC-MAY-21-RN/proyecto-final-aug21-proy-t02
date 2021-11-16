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
export const Login = ({ navigation }) => {
  const [shwPassword, setShowPassword] = useState(true);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}>
      {({values}) => (
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
          <FlexContainer h="25%" alin="flex-start">
            <InputLabel>Email</InputLabel>
            <InputText value={values.email}></InputText>
            <InputLabel>Password</InputLabel>
            <InputText
              secureTextEntry={shwPassword}
              value={values.password}></InputText>
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
          </FlexContainer>
          <FlexContainer h="25%">
            <CustomButton br="3px solid #59bcf4;" w="100%" h="35%" c={colors.black}>
              <TextButton>Login</TextButton>
            </CustomButton>
            <CustomButton br="3px solid black;" h="35%" mbt="15px"
            onPress={()=>{navigation.navigate('SignUp')}}
            >
              <TextButton>Sign in</TextButton>
            </CustomButton>
          </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
