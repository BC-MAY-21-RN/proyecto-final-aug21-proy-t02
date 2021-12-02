import React,{useState} from 'react';
import {Layout} from '../../components/styled';
import {Formik} from 'formik';
import {ButtonCustom} from '../../components/ButtonCustom';
import { signUpInputs } from '../../library/constants/dataForm';
import { signUpSchema } from '../../library/constants/validationSchema';
import { Inputs } from '../../library/constants/methods';
import { FlexContainer } from '../../components/styled';
import { RecordHeader } from '../../components/RecordHeader';
import { register } from '../../library/methods';
import { Spiner } from '../../components/Spiner';


export const SignUp = ({navigation}) => {
  const [shwPassword, setShowPassword] = useState(true);
  /* at the moment it is only for testing */
  const handleSignIn = (values) =>{
    navigation.navigate('SelectLocation', {values})
  };
  const handleInputPassword = () => {
    setShowPassword(!shwPassword);
    signUpInputs[2].secureTextEntry=!shwPassword;
  }

  const [status, setStatus] = useState(false);

  const handleSignUp = (values) =>{
    const { username, email, password } = values;

    register(email, password, username)
    .then(() => {
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
        navigation.navigate("Home");
      }, 2000);
    })
    .catch(()=>{
      console.log("error")
    });
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={ signUpSchema }
      onSubmit={ values => handleSignUp(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          { status === true && <Spiner title={'SignedUP'}/>}
          <RecordHeader  route="Login"  title="Sign Up" />
          <Inputs 
            obj = {signUpInputs}
            handleChange={handleChange}
            errors={errors} 
            touched={touched} 
            values={values}
            showEye={true}
            actionPassword={handleInputPassword}
            showPassword={shwPassword}
            num={2}
          />
          <FlexContainer  h="20%" jc="center" mt="10px">
            <ButtonCustom onPress={handleSubmit} h="50%" mt="200px" mbt="0" text="Next" hb="75%"/>
          </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
