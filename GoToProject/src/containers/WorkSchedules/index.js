import {Formik} from 'formik';
import React from 'react';
import { CustomInput } from '../../components/CustomInput';
import { ButtonCustom } from '../../components/ButtonCustom';
import {RecordHeader} from '../../components/RecordHeader';
import {
  Layout
} from '../../components/styled';
import { SchedulesBlock } from '../../components/SchedulesBlock';
import { workSchedules } from '../../library/constants/validationSchema';
import { workSchedule } from '../../library/constants/dataForm';
import { Inputs } from '../../library/constants/methods';
export const WorkShedules = () => {
  return (
    <Formik initialValues={{
      workingDays: '',
      costs:'',
    }}
    validationSchema = { workSchedules }
    onSubmit={values => console.log(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <RecordHeader route="AddNewSite" title="Work schedules"></RecordHeader>
          <SchedulesBlock/>
          <Inputs
              obj = {workSchedule} 
              handleChange={handleChange}
              errors={errors} 
              touched={touched} 
              values={values}/>
         <ButtonCustom ButtonRoute="SiteInformation" h="20%" mt="50px" text="Next"></ButtonCustom>
        </Layout>
      )}
    </Formik>
  );
};
