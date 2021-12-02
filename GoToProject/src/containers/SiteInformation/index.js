import React,{useState} from 'react';
import {ButtonCustom} from '../../components/ButtonCustom';
import {LocationMap} from '../../components/Location';
import {RecordHeader} from '../../components/RecordHeader';
import {FlexContainer, Layout} from '../../components/styled';
import {Formik} from 'formik';
import {siteDecription} from '../../library/constants/validationSchema';
import {siteInfor} from '../../library/constants/dataForm';
import {Inputs} from '../../library/constants/methods';
import { useMap } from '../../library/hooks';
import {CustomMapView} from '../../components/CustomMapView';

export const SiteInformation = ({route, navigation}) => {
  /* at the moment it is only for testing */
  // let latitude;
  // let length;
  const[dataInfo] = useState(route.params);
  const [latitude, setLatitude] = useState('');
  const [length, setLength] = useState('');
  const {position, locationLoaded, setPosition} = useMap();
  
  const handleSiteInfor = values => {
    navigation.navigate('SelectImagesSite',{
      dataInfo,
      ...values,
      position,
    });
  };

  // const setNewPositions = ({setValues}) => {
  //   setValues
  //   setLatitude(position.latitude),
  //   setLength(position.longitude)
  // }
  const loadMap = () => { 
    return (
      <CustomMapView
        mapHeight="60%"
        mapWidt="100%"
        siteLatitude={position.latitude}
        siteLongitude={position.longitude}
        onSiteChange={true}
        setPlacePosition={setPosition}>{
          console.log("lat: ",latitude, "long: ", length)}</CustomMapView>
    );
  };
  return (//is not updating values for coordinates before submitting, check this part
    <Formik
      initialValues={{
        siteDescription: '',
      }}
      validationSchema={siteDecription}
      onSubmit={(values => handleSiteInfor(values))}>
      {({handleChange, handleSubmit, errors, touched, values}) => (
        <Layout>
          <RecordHeader route="WorkShedules" values={values} title="Site Information" />
          <FlexContainer h="85%" >
          <Inputs
            obj={siteInfor}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            values={values}
          />
          {/* <LocationMap></LocationMap> */}
          {locationLoaded ? loadMap() : undefined}
          <ButtonCustom onPress={handleSubmit} h="20%" text="Next" />
          </FlexContainer>
        </Layout>
      )}
    </Formik>
  );
};
