import React from 'react';
import { ButtonCustom } from '../../components/ButtonCustom';
import { LocationMap } from '../../components/Location';
import { RecordHeader } from '../../components/RecordHeader';
import { Layout } from '../../components/styled';
import { CustomInput } from '../../components/CustomInput';
import {Formik} from 'formik';
import { siteDecription } from '../../library/constants/validationSchema';
export const SiteInformation = () => {
  return(
    <Formik 
      initialValues={{
        siteDescription: '',
      }}
      validationSchema = { siteDecription }
      onSubmit={values => console.log(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <RecordHeader title="Site Information"/>
          <CustomInput 
            label="Site description"
            name="siteDescription"
            onChangeText={handleChange('siteDescription')}
            value={values.siteDescription}
            hasErrors={errors.siteDescription}
            hasTouched={touched.siteDescription}/>
          <LocationMap></LocationMap>
          <ButtonCustom h="15%" text="Next"
            onPress={handleSubmit}/>
        </Layout>
      )}
    </Formik>
    
  );
};
