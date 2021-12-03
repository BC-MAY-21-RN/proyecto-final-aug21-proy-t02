import {Formik} from 'formik';
import React,{useState} from 'react';
import { ButtonCustom } from '../../components/ButtonCustom';
import {RecordHeader} from '../../components/RecordHeader';
import {
  Layout
} from '../../components/styled';
import { SchedulesBlock } from '../../components/SchedulesBlock';
import { workSchedules } from '../../library/constants/validationSchema';
import { workSchedule } from '../../library/constants/dataForm';
import { Inputs } from '../../library/constants/methods';
export const WorkShedules = ({route,navigation}) => {
  /* at the moment it is only for testing */
  const[dataWork]= useState(route.params);
  
  const handleWorkSchedules = (values) => {
    navigation.navigate('SiteInformation',{
      dataWork,
      ...values
    });
  };
 
  return (
    <Formik initialValues={{
      workingDays: '',
      costs:'',
    }}
    validationSchema = { workSchedules }
    onSubmit={values => handleWorkSchedules(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <RecordHeader route="AddNewSite" values={values} title="Work schedules"></RecordHeader>
          <SchedulesBlock/>
          <Inputs
              obj = {workSchedule} 
              handleChange={handleChange}
              errors={errors} 
              touched={touched} 
              values={values}/>
         <ButtonCustom onPress={handleSubmit} h="20%" mt="100px" text="Next"></ButtonCustom>
        </Layout>
      )}
    </Formik>
  );
};
