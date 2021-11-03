import {Formik} from 'formik';
import React from 'react';
import {RecordHeader} from '../../components/RecordHeader';
import {
  FlexContainer,
  InputLabel,
  InputText,
  Layout,
  CustomButton,
  TextButton
} from '../../components/styled';

export const AddNewSite = () => {
  return (
    <Formik initialValues={{}}>
      {({values}) => (
        <Layout>
          <RecordHeader title="Add a new site"></RecordHeader>
          <FlexContainer
            h="60%"
            alin="Flex-start"
            jc="flex-start">
            <InputLabel top="20px">Site name</InputLabel>
            <InputText h="60px"></InputText>
            <InputLabel top="20px">Phone</InputLabel>
            <InputText h="60px"></InputText>
            <InputLabel top="20px">Select categories</InputLabel>
            <InputText h="60px"></InputText>
          </FlexContainer>
          <FlexContainer h="20%">
            <CustomButton h="40%">
              <TextButton>Next</TextButton>
            </CustomButton>
          </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
