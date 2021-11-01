import React from 'react';
import {RecordHeader} from '../../components/RecordHeader';
import { Layout } from '../../components/styled';
import { CustomInput } from '../../components/customInput';
import { ButtonCustom } from '../../components/ButtonCustom';

export const SignUp = () => {

  return (   
        <Layout>
          <RecordHeader title="Sign Up" />
          <CustomInput label="Full Name" />
          <CustomInput label="Email" />
          <CustomInput label="Password" />
          <ButtonCustom h="20%" mt="50px" text="Sign Up" />
        </Layout>
  );
};
