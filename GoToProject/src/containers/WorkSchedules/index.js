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

export const WorkShedules = () => {
  let inputWorkSchedules
  return (
    <Formik initialValues={{
      // opening:'',
      // closing: '',
      workingDays: '',
      costs:'',
    }}
    validationSchema = { workSchedules }
    onSubmit={values => console.log(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <>
        <Layout>
          <RecordHeader title="Work schedules"></RecordHeader>
          <SchedulesBlock/>
           {
              inputWorkSchedules = workSchedule.map( entry => (
                <CustomInput 
                  label={entry.label}
                  name={entry.name}
                  onChangeText={handleChange(entry.onChangeText)}
                  value={entry.value}
                  value={values.value}
                  hasErrors={errors[entry.hasErrors]}
                  hasTouched={touched[entry.hasTouched]}
                />
              ))
            }
          <ButtonCustom h="20%" mt="50px" text="Next"
            onPress={handleSubmit}/>
        </Layout>
        </>
      )}
    </Formik>
  );
};
