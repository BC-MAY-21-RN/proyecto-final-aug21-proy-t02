import React from 'react';
import {
  CustomButton,
  Layout,
  TextButton,
} from '../../components/styled';
import {FlexContainer} from '../../components/styled';
import {LocationMap} from '../../components/Location';
import {RecordHeader} from '../../components/RecordHeader';

export const SelectLocation = () => {
  return (
    <Layout>
      <RecordHeader route="SignUp" title="Select your location"></RecordHeader>
      <LocationMap></LocationMap>
      <FlexContainer h="20%">
        <CustomButton h="40%">
          <TextButton>Sign up</TextButton>
        </CustomButton>
      </FlexContainer>
    </Layout>
  );
};
