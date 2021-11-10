import React, {useState} from 'react';
import {Formik} from 'formik';
import { colors } from '../../library/constants/colors';
import { ContainerImage, ContainerImages, ImageButtons, ButtonAction, } from './styled';
import {ButtonCustom} from '../../components/ButtonCustom';
import {RecordHeader} from '../../components/RecordHeader';
import primaryImage from '../../library/images/Galeria.jpeg';
import {OpenGaleria} from '../../components/SelectImagesActions';
import {Image} from 'react-native';
import {Layout, InputLabel} from '../../components/styled';
import {CustomIcon} from '../../components/CustomIcon';
import {ImgCustom} from '../../components/SelectImagesActions/SelectCustomImage';
export const SelectImagesSite = () => {
  const [defaultImage] = useState(primaryImage);
  const [imagePrimary, setImagePrimary] = useState(false);
  const [imagesOne, setImagesOne] = useState(false);
  const [imagesTwo, setImagesTwo] = useState(false);
  const [imagesThree, setImagesThree] = useState(false);
  const [imagesFourt, setImagesFourt] = useState(false);
  return (
    <Formik initialValues={{}}>
      {({values}) => (
        <Layout>
          <RecordHeader title="Mages for the site "></RecordHeader>
          <InputLabel left="-60px" bot="10px" fonz="20px">
            Select the main image
          </InputLabel>
          <ContainerImage>
            <Image
              source={imagePrimary ? {uri: imagePrimary} : defaultImage}
              style={{borderRadius: 5, width: 330, height: 140}}
            />
            <ImageButtons>
              <ButtonAction onPress={() => OpenGaleria(setImagePrimary, true)}>
                <CustomIcon name="image" size={50} color={colors.white} />
              </ButtonAction>
              <ButtonAction onPress={() => OpenGaleria(setImagePrimary, false)}>
                <CustomIcon name="camera" size={50} color={colors.white}  />
              </ButtonAction>
            </ImageButtons>
          </ContainerImage>
          <InputLabel left="-60px" bot="10px" top="25px" fonz="20px">
            Select more 4 images
          </InputLabel>
          <ContainerImages>
            <ImgCustom state={setImagesOne} value={imagesOne} def={defaultImage} />
            <ImgCustom state={setImagesTwo} value={imagesTwo} def={defaultImage} />
            <ImgCustom state={setImagesThree} value={imagesThree} def={defaultImage} />
            <ImgCustom state={setImagesFourt} value={imagesFourt} def={defaultImage} />
          </ContainerImages>
          <ButtonCustom h="20%" mt="30px" text="Add"></ButtonCustom>
        </Layout>
      )}
    </Formik>
  );
};