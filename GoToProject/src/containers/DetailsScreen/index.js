import React, {useState, useEffect} from 'react';
import {CustomScrollView, FlexContainer, Layout} from '../../components/styled';
import {CustomImage} from './styled';
import {ImgButtos} from '../../components/PlaceDetails/ImgButtons';
import {PlaceDetails} from '../../components/PlaceDetails';
import {CustomMapView} from '../../components/CustomMapView';
import * as mapConstants from '../../library/constants/mapConstants';
import {detailsSite} from '../../library/methods/firebaseDetailsSite';
import {useMap} from '../../library/hooks';

export const DetailsScreen = ({route: {params}}) => {
  const {urlImage, idSite} = params;
  const [dataDetails, setDataDetails] = useState({});
  const [coordinatesLoaded, setCoordinatesLoaded] = useState(false);
  
  useMap();
  
  useEffect(() => {
    detailsSite(idSite, setDataDetails, setCoordinatesLoaded);
  }, []);

  const showMap = () => {
    
    return(
      <CustomMapView
          mapHeight="400px"
          mapWidt="100%"
          siteName={dataDetails.title}
          siteLatitude={dataDetails.latitude}
          siteLongitude={dataDetails.longitude}
        />
    )
  };
  return (
    <Layout justifyCont="center" padd="0">
      <CustomScrollView>
        <FlexContainer h="300px">
          <CustomImage source={{uri: urlImage}} />
          <ImgButtos 
            dataDetails = {dataDetails}
            urlImage = {urlImage}/>
        </FlexContainer>
        <PlaceDetails
          data={dataDetails}
          schedulePm={dataDetails.schedules_open}
          scheduleAm={dataDetails.schedules_close}
          title={dataDetails.title}
          categorie={dataDetails.category}
          description={dataDetails.description}
        />
        {coordinatesLoaded ? showMap() : undefined}
      </CustomScrollView>
    </Layout>
  );
};
