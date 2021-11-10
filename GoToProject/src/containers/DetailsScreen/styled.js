import styled from 'styled-components/native';
import { FlexContainer, InputLabel } from '../../components/styled';

export const CustomImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ScrollContainer = styled(FlexContainer)`
height: auto;
padding-left: 20px;
padding-right: 20px;
`;

export const DetailsText = styled(InputLabel)`
left: 0;
text-align: justify;
padding: 10px;
`;

