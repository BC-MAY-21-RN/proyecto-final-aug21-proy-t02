import styled from 'styled-components/native';
import {colors} from '../../library/constants/colors';
import {TitleText, FlexContainer} from '../../components/styled';

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ContainerImages = styled.View`
  background-color: ${colors.GrayImages};
  flex-direction: row;
  border-radius: 5px;
  width: 330px;
  margin-top: 0px;
  height: 150px;
  justify-content:flex-start;
`;

export const ImageButtons = styled.View`
  z-index: 2;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  //opacity: 0.7;
  position: absolute;
  height: 50px;
  width: 160px;
`;

export const ButtonAction = styled.TouchableOpacity`
  z-index: 3;
  margin: 10px;
  position:  ${({pttn}) => pttn ?? 'relative'};
  align-items: center;
  width: ${({w}) => w ?? '80px'};
  height: ${({h}) => h ?? '80px'};
  left: ${({left}) => left ?? '-20px'};
  top: ${({top}) => top ?? '0px'};
  justify-content: ${({jc}) => jc ?? 'center'};
  background: ${colors.lettersGray};
  opacity: 0.7;
  border-radius: 5px;
`;
