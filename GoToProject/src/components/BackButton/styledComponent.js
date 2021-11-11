import styled from "styled-components";
import { colors } from "../../library/constants/colors";

export const BackButtonContainer = styled.TouchableOpacity `
  background-color: ${({bg}) => bg ?? 'transparent'};
  height: 40%;
  flex-direction: column;
  justify-content: flex-start;
`;
