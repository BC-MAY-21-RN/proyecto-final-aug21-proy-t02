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

export const WorkShedules = () => {
  return (
    <Formik initialValues={{}}>
      {({values}) => (
        <Layout>
          <RecordHeader title="Work schedules"></RecordHeader>
          <FlexContainer
            h="20%"
            dir="row"
            jc="space-between">
              <FlexContainer
                w="40%"
                mbt="0px"
                mt="0px"
                jc="flex-start"
                alin="flex-start">
                  <InputLabel top="20px">Schedules</InputLabel>
                  <InputText h="60px"></InputText>
              </FlexContainer>
              <InputLabel
                mr="20px"
                top="20px">
                  to
                </InputLabel>
              <FlexContainer
                w="40%"
                mbt="0px"
                mt="0px"
                jc="flex-start"
                alin="flex-start">
                  <InputLabel top="20px">Schedules</InputLabel>
                  <InputText h="60px"></InputText>
              </FlexContainer>
          </FlexContainer>
          <FlexContainer
            h="40%"
            alin="Flex-start"
            jc="flex-start">
            <InputLabel>Working days</InputLabel>
            <InputText h="60px"></InputText>
            <InputLabel top="20px">Costs it handles</InputLabel>
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
