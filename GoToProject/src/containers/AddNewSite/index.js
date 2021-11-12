import {Formik} from 'formik';
import React from 'react';
import {RecordHeader} from '../../components/RecordHeader';
import {
  Layout
} from '../../components/styled';
import { ButtonCustom } from '../../components/ButtonCustom';
import { addNewSite } from '../../library/constants/validationSchema';
import { newSite } from '../../library/constants/dataForm';
import { Inputs } from '../../library/constants/methods';

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
          <Inputs
              obj = {newSite} 
              handleChange={handleChange}
              errors={errors} 
              touched={touched} 
              values={values}/>
          <ButtonCustom h="20%" mt="50px" text="Next" 
            onPress={handleSubmit}/>
        </Layout>
      )}
    </Formik>
  );
};
