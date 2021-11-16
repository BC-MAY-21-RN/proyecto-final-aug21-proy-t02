import React from 'react';
import { ButtonCustom } from '../../components/ButtonCustom';
import { LocationMap } from '../../components/Location';
import { RecordHeader } from '../../components/RecordHeader';
import { Layout } from '../../components/styled';
import {Formik} from 'formik';
import { siteDecription } from '../../library/constants/validationSchema';
import { siteInfor } from '../../library/constants/dataForm';
import { Inputs } from '../../library/constants/methods';
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
            <Inputs
              obj = {siteInfor} 
              handleChange={handleChange}
              errors={errors} 
              touched={touched} 
              values={values}/>
          <LocationMap></LocationMap>
          <ButtonCustom h="15%" text="Next"
            onPress={handleSubmit}/>
        </Layout>
      )}
    </Formik>
  );
};
