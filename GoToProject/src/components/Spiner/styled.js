import styled from 'styled-components/native';
import {colors} from '../../library/constants/colors';

export const ContainerSpiner = styled.View`
  background-color: rgba(${colors.GrayTransparent} 0.7); 
  position: absolute;
  z-index: 5;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const Title = styled.Text`
font-size: 17px;
margin-top: 20px;
color:${colors.white};
font-weight: 500;
`;
export const RowSpiner = styled(ContainerSpiner)`
background:${colors.blue};
flex-direction: column;
justify-content: center;
align-items: center;
width: 130px;
height: 150px;
border-radius: 10px;

`;
