import {Formik} from 'formik';
import React from 'react';
import { CustomInput } from '../../components/CustomInput';
import {RecordHeader} from '../../components/RecordHeader';
import {
  FlexContainer,
  InputLabel,
  InputText,
  Layout,
  CustomButton,
  TextButton
} from '../../components/styled';

import { ButtonCustom } from '../../components/ButtonCustom';

export const AddNewSite = () => {
  return (
    <Formik initialValues={{}}>
      {({values}) => (
        <Layout>
          <RecordHeader title="Add a new site"></RecordHeader>
          <CustomInput label="Site name"/>
          <CustomInput label="Phone"/>
          <CustomInput label="Select categories"/>
          <ButtonCustom h="20%" mt="50px" text="Next" />
        </Layout>
      )}
    </Formik>
  );
};
