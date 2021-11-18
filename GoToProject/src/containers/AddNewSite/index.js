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

export const AddNewSite = ({navigation}) => {

  /* at the moment it is only for testing */
  const handleNewSite = () => {
    navigation.navigate('WorkShedules');
  };
  return (
    <Formik 
      initialValues={{
        siteName: '',
        categories: '',
      }}
      validationSchema = { addNewSite }
      onSubmit={values => handleNewSite(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <RecordHeader route="Home" title="Add a new site"></RecordHeader>
          <Inputs
              obj = {newSite} 
              handleChange={handleChange}
              errors={errors} 
              touched={touched} 
              values={values}/>
           <ButtonCustom onPress={handleSubmit} h="20%" mt="100px" text="Next" />
        </Layout>
      )}
    </Formik>
  );
};
