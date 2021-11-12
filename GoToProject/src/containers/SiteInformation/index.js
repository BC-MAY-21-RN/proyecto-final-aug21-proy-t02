import React from 'react';
import { ButtonCustom } from '../../components/ButtonCustom';
import { LocationMap } from '../../components/Location';
import { RecordHeader } from '../../components/RecordHeader';
import { Layout } from '../../components/styled';
import { CustomInput } from '../../components/CustomInput';
import {Formik} from 'formik';
import { siteDecription } from '../../library/constants/validationSchema';
import { siteInfor } from '../../library/constants/dataForm';
export const SiteInformation = () => {
  let inputdescription
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
            {
              inputdescription = siteInfor.map( entry => (
                <CustomInput 
                  label={entry.label}
                  name={entry.name}
                  onChangeText={handleChange(entry.onChangeText)}
                  value={values[entry.value]}
                  hasErrors={errors[entry.hasErrors]}
                  hasTouched={touched[entry.hasTouched]}
                />
              ))
            }
          <LocationMap></LocationMap>
          <ButtonCustom h="15%" text="Next"
            onPress={handleSubmit}/>
        </Layout>
      )}
    </Formik>
    
  );
};
