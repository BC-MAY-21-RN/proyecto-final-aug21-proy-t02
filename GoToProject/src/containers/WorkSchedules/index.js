import {Formik} from 'formik';
import React from 'react';
import { CustomInput } from '../../components/CustomInput';
import { ButtonCustom } from '../../components/ButtonCustom';
import {RecordHeader} from '../../components/RecordHeader';
import {
  FlexContainer,
  InputLabel,
  InputText,
  Layout
} from '../../components/styled';

export const WorkShedules = () => {
  return (
    <Formik initialValues={{}}>
      {({values}) => (
        <Layout>
          <RecordHeader title="Work schedules"></RecordHeader>
          <FlexContainer
            h="15%"
            dir="row"
            jc="space-between">
              <FlexContainer
                w="40%"
                mbt="0px"
                mt="0px"
                jc="flex-start"
                alin="flex-start">
                  <InputLabel top="20px">Schedules</InputLabel>
                  <InputText h="40px"></InputText>
              </FlexContainer>
              <InputLabel
                mr="20px">
                  to
                </InputLabel>
              <FlexContainer
                w="40%"
                mbt="0px"
                mt="0px"
                jc="flex-start"
                alin="flex-start">
                  <InputLabel top="20px">Schedules</InputLabel>
                  <InputText h="40px"></InputText>
              </FlexContainer>
          </FlexContainer>
          <CustomInput label="Working days"></CustomInput>
          <CustomInput label="Costs it handles"></CustomInput>
          <ButtonCustom h="20%" mt="50px" text="Next"></ButtonCustom>
        </Layout>
      )}
    </Formik>
  );
};
