import React from 'react';
import { ButtonCustom } from '../../components/ButtonCustom';
import { LocationMap } from '../../components/Location';
import { RecordHeader } from '../../components/RecordHeader';
import { Layout } from '../../components/styled';
import { CustomInput } from '../../components/CustomInput';
export const SiteInformation = () => {
  return(
    <Layout>
      <RecordHeader route="WorkShedules" title="Site Information"/>
      <CustomInput label="Site description"/>
      <LocationMap></LocationMap>
      <ButtonCustom  ButtonRoute="SelectImagesSite" h="20%" text="Next"/>
    </Layout>
  );
};
