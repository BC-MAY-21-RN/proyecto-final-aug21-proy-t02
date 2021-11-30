import React,{useState} from 'react';
import {ButtonCustom} from '../../components/ButtonCustom';
import {LocationMap} from '../../components/Location';
import {RecordHeader} from '../../components/RecordHeader';
import {Layout} from '../../components/styled';
import {Formik} from 'formik';
import {siteDecription} from '../../library/constants/validationSchema';
import {siteInfor} from '../../library/constants/dataForm';
import {Inputs} from '../../library/constants/methods';
export const SiteInformation = ({route, navigation}) => {
  /* at the moment it is only for testing */
  const latitude = '11.21181';
  const length = '-12.12';
  const[dataInfo] = useState(route.params);

  const handleSiteInfor = values => {
    navigation.navigate('SelectImagesSite',{
      dataInfo,
      ...values,
    });
  };

  return (
    <Formik
      initialValues={{
        siteDescription: '',
        latitude,
         length,
      }}
      validationSchema={siteDecription}
      onSubmit={values => handleSiteInfor(values)}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <RecordHeader route="WorkShedules" values={values} title="Site Information" />
          <Inputs
            obj={siteInfor}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />
          <LocationMap></LocationMap>
          <ButtonCustom onPress={handleSubmit} h="20%" text="Next" />
        </Layout>
      )}
    </Formik>
  );
};
