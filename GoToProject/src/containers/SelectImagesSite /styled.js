import styled from 'styled-components/native';
import {colors} from '../../library/constants/colors';
import {TitleText, FlexContainer} from '../../components/styled';

export const ImageClick = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageButtons = styled.View`
  z-index: 2;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  opacity: 0.7;
  position: absolute;
  width: 160px;
  
  height: 50px;
  justify-content: space-between;
`;

export const ButtonAction = styled.TouchableOpacity`
  z-index: 3;
  width: 80px;
  margin: 10px;
  align-items: center;
  height: 80px;
  left:-20px;
  background: ${colors.lettersGray};
  justify-content: center;
 border-radius: 5px;
  
`;
