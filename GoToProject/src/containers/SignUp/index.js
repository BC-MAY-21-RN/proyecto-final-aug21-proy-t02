import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {RecordHeader} from '../../components/RecordHeader';
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
import {Formik} from 'formik';
import {colors} from '../../library/constants/colors';
import Icon from 'react-native-ionicons';
import { CustomInput } from '../../components/customInput';
import { ButtonCustom } from '../../components/ButtonCustom';

export const SignUp = () => {
  const [shwPassword, setShowPassword] = useState(true);

  const handleSignIn = values => {
    const {email, password, username} = values;
    (() => {
      setStatus('signedUp');
    })
      .catch(() => {
        setStatus('false');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}>
      {({values}) => (
        <Layout>
          <RecordHeader title="Sign Up" />
          <CustomInput label="Full Name" />
          <CustomInput label="Email" />
          <CustomInput label="Password" />
          <ButtonCustom h="20%" mt="50px" text="Sign Up" />
        </Layout>
      )}
    </Formik>
  );
};
