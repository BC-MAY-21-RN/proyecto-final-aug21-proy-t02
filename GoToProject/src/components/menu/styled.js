import styled from 'styled-components/native';
import {colors} from '../../library/constants/colors';

export const ContainerMenu = styled.View`
  background: ${colors.blue};
  position: absolute;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  top: 97%;
  left:20px;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 60px;
`;
export const ContainerButtons = styled.View`
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  flex-direction: row;
  width: 75%;
  top: 0px;
  height: 73px;
`;
