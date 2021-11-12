import {Formik} from 'formik';
import React from 'react';
import { CustomInput } from '../../components/CustomInput';
import {RecordHeader} from '../../components/RecordHeader';
import {
  Layout
} from '../../components/styled';

import { ButtonCustom } from '../../components/ButtonCustom';
import { addNewSite } from '../../library/constants/validationSchema';
import { newSite } from '../../library/constants/dataForm';

export const AddNewSite = () => {
  let inputNewSite
  return (
    <Formik 
      initialValues={{
        siteName: '',
        phone: '',
        categories: '',
      }}
      validationSchema = { addNewSite }
      onSubmit={values => console.log(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <>
        <Layout>
          <RecordHeader title="Add a new site"></RecordHeader>
            {
              inputNewSite = newSite.map( entry => (
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
