import React from 'react';
import {RecordHeader} from '../../components/RecordHeader';
import {Layout} from '../../components/styled';
import {CustomInput} from '../../components/CustomInput';
import {ButtonCustom} from '../../components/ButtonCustom';

const signUpInputs = [
  {
    key: 'Full name'
  },
  {
    key: 'Email'
  },
  {
    key: 'Password'
  },
];

export const SignUp = () => {
  const inputList = signUpInputs.map(inputName => (
    <CustomInput label={inputName.key} key={inputName.key} />    
  ));
  return (
    <Layout>
      <RecordHeader title="Sign Up" />
      {inputList}
      <ButtonCustom h="20%" mt="50px" text="Sign Up" />
    </Layout>
  );
};
