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
          <RecordHeader route="Home" title="Add a new site"></RecordHeader>
          <Inputs
              obj = {newSite} 
              handleChange={handleChange}
              errors={errors} 
              touched={touched} 
              values={values}/>
           <ButtonCustom ButtonRoute="WorkShedules" h="20%" mt="50px" text="Next" />
        </Layout>
      )}
    </Formik>
  );
};
