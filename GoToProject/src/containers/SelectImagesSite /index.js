import React from 'react';
import {Formik} from 'formik';
import { ButtonCustom } from '../../components/ButtonCustom';
import {RecordHeader} from '../../components/RecordHeader';
import {Text} from 'react-native';
import {
  Layout,
  InputLabel,
} from '../../components/styled';
export const SelectImagesSite = () => {
    return (
        <Formik initialValues={{}}>
          {({values}) => (
            <Layout>
              <RecordHeader title="Mages for the site "></RecordHeader>
               <Text style={{color:'#fff'}}>Select images</Text>
              <ButtonCustom h="20%" mt="50px" text="Add"></ButtonCustom>
            </Layout>
          )}
        </Formik>
      );
    };