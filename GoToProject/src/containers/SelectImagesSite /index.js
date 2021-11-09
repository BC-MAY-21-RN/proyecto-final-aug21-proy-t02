import React, {useState} from 'react';
import {Formik} from 'formik';
import {ImageClick, ImageButtons, ButtonAction} from './styled';
import {ButtonCustom} from '../../components/ButtonCustom';
import {RecordHeader} from '../../components/RecordHeader';
import primaryImage from '../../library/images/Galeria.jpeg';
import {OpenGaleria} from '../../components/SelectImagesActions/inded';
import {Text, Image} from 'react-native';
import {Layout, InputLabel} from '../../components/styled';
import {CustomIcon} from '../../components/CustomIcon';

export const SelectImagesSite = () => {
  const [defaultImage] = useState(primaryImage);
  const [imageUri, setImageUri] = useState(false);

  return (
    <Formik initialValues={{}}>
      {({values}) => (
        <Layout>
          <RecordHeader title="Mages for the site "></RecordHeader>
          <InputLabel left="-60px" bot="10px" fonz="20px">Select the main image</InputLabel>

          <ImageClick onPress={() => OpenGaleria(setImageUri, doAction)}>
            <Image
              source={imageUri ? {uri: imageUri} : defaultImage}
              style={{ borderRadius: 5, width: 330, height: 140, }}
            />
            <ImageButtons>
              <ButtonAction onPress={() => OpenGaleria(setImageUri, true)}>
                <CustomIcon name="image" size={50}  color="#fff" />
              </ButtonAction>
              <ButtonAction onPress={() => OpenGaleria(setImageUri, false)}>
                <CustomIcon name="camera" size={50}  color="#fff" />
              </ButtonAction>
            </ImageButtons>
          </ImageClick>
          <ButtonCustom h="20%" mt="50px" text="Add"></ButtonCustom>
        </Layout>
      )}
    </Formik>
  );
};
