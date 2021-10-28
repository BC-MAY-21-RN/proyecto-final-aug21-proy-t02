import React from 'react';
import Icon from 'react-native-ionicons';
import { CustomButton, InputLabel, Layout, TextButton } from '../../components/styled'
import { FlexContainer } from '../../components/styled';
import { colors } from '../../library/constants/colors';



export const SelectLocation = () => {
  return(
    <Layout>
      <FlexContainer
        h="20%"
        dir="row">
          <Icon
            name="arrow-back"
            style={{
              fontSize: 30,
              color: colors.white,
              marginLeft: 10,
              marginBottom: 40,
            }}
          />
          <InputLabel
            fonz="35px"
            color={colors.white}
            mr="150px"
            ml="20px">
            Select your {"\n"} 
            location
          </InputLabel>
      </FlexContainer>
      <FlexContainer
        h="10%"
        dir="row">
          <Icon
            name="pin"
            style={{
              fontSize: 35,
              color: colors.lettersGray,
              marginLeft: 5,
              marginBottom: 5,
            }}
          />
          <InputLabel
            fonz="25px"
            mr="240px">
            Location
          </InputLabel>
      </FlexContainer>
      <FlexContainer
        bg={colors.gray}
        h="50%">
      </FlexContainer>
      <FlexContainer
        h="20%">
          <CustomButton
            h="40%">
            <TextButton>
              Sign up
            </TextButton>
          </CustomButton>
      </FlexContainer>
    </Layout>
  );
};
