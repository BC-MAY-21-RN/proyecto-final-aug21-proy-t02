import React, {useState, useEffect} from 'react';
import {CustomScrollView, FlexContainer, Layout} from '../../components/styled';
import {CustomImage,Loading } from './styled';
import {colors} from '../../library/constants/colors';
import {ImgButtos} from '../../components/PlaceDetails/ImgButtons';
import {PlaceDetails} from '../../components/PlaceDetails';
import {CustomMapView} from '../../components/CustomMapView';
import * as mapConstants from '../../library/constants/mapConstants';
import {detailsSite} from '../../library/methods/firebaseDetailsSite';
export const DetailsScreen = ({route: {params}}) => {
  const {urlImage, idSite,id_images} = params;
  
  const [dataDetails, setDataDetails] = useState({});
  useEffect(() => { detailsSite(idSite, setDataDetails)}, []);
  return (
    <Layout justifyCont="center" padd="0">
      <CustomScrollView>
        <FlexContainer h="300px">
          <CustomImage source={{uri: urlImage}} />
          <ImgButtos 
             idSite={idSite}
             id_images={id_images}
            dataDetails = {dataDetails}
            urlImage = {urlImage}/>
        </FlexContainer>
        {dataDetails.title==undefined? <Loading  size={80} color={colors.white}/>:<>
        <PlaceDetails
          id_images={id_images}
          data={dataDetails}
          schedulePm={dataDetails.schedules_open}
          scheduleAm={dataDetails.schedules_close}
          title={dataDetails.title}
          categorie={dataDetails.category}
          description={dataDetails.description}
        />
        <CustomMapView
          mapHeight="400px"
          mapWidt="100%"
          siteName={mapConstants.placeName}
          siteLatitude={mapConstants.LATITUDE}
          siteLongitude={mapConstants.LONGITUDE}
        /></>}
      </CustomScrollView>
    </Layout>
  );
};
