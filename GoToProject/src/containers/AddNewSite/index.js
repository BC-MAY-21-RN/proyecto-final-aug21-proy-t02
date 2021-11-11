import {Formik} from 'formik';
import React from 'react';
import { CustomInput } from '../../components/CustomInput';
import {RecordHeader} from '../../components/RecordHeader';
import {
  Layout
} from '../../components/styled';

import { ButtonCustom } from '../../components/ButtonCustom';
import { addNewSite } from '../../library/constants/validationSchema';

export const AddNewSite = () => {
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
        <Layout>
          <RecordHeader title="Add a new site"></RecordHeader>
          <CustomInput 
            label="Site name"
            name="siteName"
            onChangeText={handleChange('siteName')}
            value={values.siteName}
            hasErrors={errors.siteName}
            hasTouched={touched.siteName}/>
          <CustomInput 
            label="Phone"
            name="phone"
            onChangeText={handleChange('phone')}
            value={values.phone}
            hasErrors={errors.phone}
            hasTouched={touched.phone}/>
          <CustomInput 
            label="Select categories"
            name="categories"
            onChangeText={handleChange('categories')}
            value={values.categories}
            hasErrors={errors.categories}
            hasTouched={touched.categories}/>
          <ButtonCustom h="20%" mt="50px" text="Next" 
            onPress={handleSubmit}/>
        </Layout>
      )}
    </Formik>
  );
};
