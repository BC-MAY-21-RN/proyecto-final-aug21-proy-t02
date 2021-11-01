import React from 'react';
import { HeadBoard, LocationContainer, MapContainer } from './styledComponent';
import Icon from 'react-native-ionicons';
import { colors } from '../../library/constants/colors';
import { InputLabel } from '../styled';

export const LocationMap = () => {
  return(
    <LocationContainer>
      <HeadBoard>
        <Icon
            name="pin"
            style={{
              fontSize: 35,
              color: colors.lettersGray,
            }}
          />
        <InputLabel
            fonz="25px"
            mr="240px">
            Location
        </InputLabel>
      </HeadBoard>
      <MapContainer>
      </MapContainer>
    </LocationContainer>
  );
};
