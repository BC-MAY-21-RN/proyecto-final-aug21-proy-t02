import React from 'react';
import {RecordHeader} from '../../components/RecordHeader';
import {Layout} from '../../components/styled';
import {CustomInput} from '../../components/CustomInput';
import {ButtonCustom} from '../../components/ButtonCustom';

const signUpInputs = [
  {
    key: 'Full name',
  },
  {
    key: 'Email',
  },
  {
    key: 'Password',
  },
];

export const SignUp = () => {
  const inputList = signUpInputs.map(inputName => (
    <CustomInput label={inputName.key} key={inputName.key} />
  ));
  return (
    <Layout>
      <RecordHeader  route="Login"  title="Sign Up" />
      {inputList}
      <ButtonCustom ButtonRoute="SelectLocation" h="20%" mt="100px" text="Next" />
    </Layout>
  );
};
