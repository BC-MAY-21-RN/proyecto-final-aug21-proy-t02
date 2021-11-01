import React from "react";
import { BackButtonContainer } from "./styledComponent";
import Icon from "react-native-ionicons";
import { colors } from "../../library/constants/colors";
export const BackButton = () => {
  return(
    <BackButtonContainer>
      <Icon
          name="arrow-back"
          style={{
            fontSize: 30,
            color: colors.white,
          }}
        />
    </BackButtonContainer>
  );
};
