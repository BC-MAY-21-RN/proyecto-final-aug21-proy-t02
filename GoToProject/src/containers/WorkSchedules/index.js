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
import { SchedulesBlock } from '../../components/SchedulesBlock';

export const WorkShedules = () => {
  return (
    <Formik initialValues={{}}>
      {({values}) => (
        <Layout>
          <RecordHeader route="AddNewSite" title="Work schedules"></RecordHeader>
          <SchedulesBlock/>
          <CustomInput label="Working days"></CustomInput>
          <CustomInput label="Costs it handles"></CustomInput>
          <ButtonCustom ButtonRoute="SiteInformation" h="20%" mt="50px" text="Next"></ButtonCustom>
        
        </Layout>
      )}
    </Formik>
  );
};
