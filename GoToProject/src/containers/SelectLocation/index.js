import React from 'react';
import {
  CustomButton,
  Layout,
  TextButton,
} from '../../components/styled';
import {FlexContainer} from '../../components/styled';
import {LocationMap} from '../../components/Location';
import {RecordHeader} from '../../components/RecordHeader';
import { register } from '../../library/methods/auth';

export const SelectLocation = ({route: {params}, navigation}) => {
  const { email, password, username } = params.values;
  const handleSelectLocation = () =>{
    register(email, password, username)
    .then(() => {
      console.log("registrado")
    })
    .catch(()=>{
      console.log("error")
    });
    navigation.navigate("Home");
  };
  return (
    <Layout>
      <RecordHeader route="SignUp" title="Select your location"></RecordHeader>
      <LocationMap></LocationMap>
      <FlexContainer h="20%">
        <CustomButton onPress={ handleSelectLocation }  h="40%">
          <TextButton>Sign up</TextButton>
        </CustomButton>
      </FlexContainer>
    </Layout>
  );
};
