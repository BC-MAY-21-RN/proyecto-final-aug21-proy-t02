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

export const WorkShedules = () => {
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
        <Layout>
          <RecordHeader title="Work schedules"></RecordHeader>
          <SchedulesBlock/>
          <CustomInput 
            label="Working days"
            name="workingDays"
            onChangeText={handleChange('workingDays')}
            value={values.workingDays}
            hasErrors={errors.workingDays}
            hasTouched={touched.workingDays}/>
          <CustomInput 
            label="Costs it handles"
            name="costs"
            onChangeText={handleChange('costs')}
            value={values.costs}
            hasErrors={errors.costs}
            hasTouched={touched.costs}/>
          <ButtonCustom h="20%" mt="50px" text="Next"
            onPress={handleSubmit}/>
        </Layout>
      )}
    </Formik>
  );
};
