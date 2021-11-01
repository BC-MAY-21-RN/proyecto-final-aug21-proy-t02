import styled from "styled-components/native";
import { colors } from "../../library/constants/colors";
import { Layout } from "../styled";

export const MapContainer = styled.View`
  width: ${({w}) => w ?? '100%'}
  background-color: ${({bg}) => bg ?? colors.gray};
  flex: 1;
`;
export const HeadBoard = styled.View`
  height: ${({h}) => h ?? '15%'};
  width: ${({w}) => w ?? '100%'};
  background-color: ${({bg}) => bg ?? colors.black};
  flex-direction: row;
  justify-content: center;
  align-items: center
  padding-left: 10px;
`;
export const LocationContainer = styled(Layout)`
  flex: 1;
  padding: 0px;
`; 
