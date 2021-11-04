import styled from 'styled-components/native';
import {colors} from '../../library/constants/colors';
import {TitleText, FlexContainer} from '../../components/styled';
export const Cart = styled(FlexContainer)`
  border-radius: 8px;
`;
export const Starts = styled.View`
  background: #59bcf4;
  opacity: 0.8;
  width: 80px;
  height: 35px;
  display: flex;
  position: absolute;
  top: 85px;
  border-radius: 10px;
`;
export const TextStart = styled(TitleText)`
  align-items: center;
  justify-content: center;
  margin: 1px;
  position: relative;
  text-align: center;
`;
export const CartImage = styled(FlexContainer)``;
export const CartInfo = styled(FlexContainer)`
  margin-left: 13px;
`;
export const InfoTitle = styled(FlexContainer)`
  top: 8px;
  left: -10px;
`;
export const TitleCart = styled(TitleText)`
  height: ${({h}) => h ?? 'auto'};
`;
export const TitleDescription = styled(TitleText)`
  height: ${({h}) => h ?? 'auto'};
`;
export const TouchableOpacity = styled.TouchableOpacity`
  background: ${colors.blue};
  align-items: center;
  justify-content: center;
  left: -10px;
  top: -2px;
  border-radius: 25px;
  width: 40px;
  height: 40px;
`;
