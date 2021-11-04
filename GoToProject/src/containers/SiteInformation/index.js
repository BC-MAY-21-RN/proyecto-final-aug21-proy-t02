import React from 'react';
import { ButtonCustom } from '../../components/ButtonCustom';
import { LocationMap } from '../../components/Location';
import { RecordHeader } from '../../components/RecordHeader';
import { Layout } from '../../components/styled';
import { CustomInput } from '../../components/CustomInput';
export const SiteInformation = () => {
  return(
    <Layout>
      <RecordHeader title="Site Information"/>
      <CustomInput label="Site description"/>
      <LocationMap></LocationMap>
      <ButtonCustom h="15%" text="Next"/>
    </Layout>
  );
};
