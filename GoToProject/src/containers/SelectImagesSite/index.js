import React, {useState} from 'react';
import {  ContainerImages } from './styled';
import { useNavigation } from '@react-navigation/native';
import {ButtonCustom} from '../../components/ButtonCustom';
import {RecordHeader} from '../../components/RecordHeader';
import primaryImage from '../../library/images/Galeria.jpeg';
import {Layout, InputLabel} from '../../components/styled';
import nextId from 'react-id-generator';
import {ImgCustom} from '../../components/SelectImagesActions/SelectCustomImage';
import {ShowPrimaryImage} from '../../components/SelectImagesActions/SelectimagePrimary';
import { createSite } from '../../library/methods/firebaseCreateSite';
import { Alert } from 'react-native';
import { Spiner } from '../../components/Spiner';
export const SelectImagesSite = ({route}) => {
  const navigation = useNavigation();
  const[data] = useState(route.params);
  const [defaultImage] = useState(primaryImage);
  const [imagePrimary, setImagePrimary] = useState(false);
  const [imagesOne, setImagesOne] = useState(false);
  const [imagesTwo, setImagesTwo] = useState(false);
  const [imagesThree, setImagesThree] = useState(false);
  const [imagesFourt, setImagesFourt] = useState(false);
  const [isLoading,setIsLoading]= useState(false);
  const dataImages={imagePrimary,imagesOne,imagesTwo,imagesThree,imagesFourt};
  const handleSubmit = () => {
    imagePrimary ? createSite(data,dataImages,setIsLoading) : Alert.alert("Select a main image");
  }
  if(isLoading === 1){
    setIsLoading(false);
    setTimeout(() => navigation.navigate("Home",{"newsite":nextId(`nextId`)}),200);
  }
  return (<>
          {isLoading ? <Spiner title="Creating a site"/> :null}
        <Layout>
          <RecordHeader route="SiteInformation" title="Mages for the site "></RecordHeader>
          <InputLabel left="-60px" bot="10px" fonz="20px">Select the main image</InputLabel>
          <ShowPrimaryImage state={setImagePrimary} value={imagePrimary} def={defaultImage}/>
          <InputLabel left="-60px" bot="10px" top="25px" fonz="20px">Select more 4 images</InputLabel>
          <ContainerImages>
            <ImgCustom state={setImagesOne} value={imagesOne} def={defaultImage} />
            <ImgCustom state={setImagesTwo} value={imagesTwo} def={defaultImage} />
            <ImgCustom state={setImagesThree} value={imagesThree} def={defaultImage} />
            <ImgCustom state={setImagesFourt} value={imagesFourt} def={defaultImage} />
          </ContainerImages>
          <ButtonCustom h="20%" onPress={handleSubmit} mt="30px" text="Create site "></ButtonCustom>
        </Layout>
        </>
  );
};

