import styled from 'styled-components/native';
import { ActivityIndicator} from 'react-native';
import {FlexContainer, InputLabel, TitleText} from '../../components/styled';
import {colors} from '../../library/constants/colors';
export const CustomImage = styled.Image`
  height: 100%;
  width: 100%;
  top: -1px;
`;
export const RowButtons = styled.View`
  width: 100%;
  height: 50px;
  top: 20px;
  flex-direction: row;
  padding: 0px 20px;
  justify-content: space-between;
  position: absolute;
`;
export const Buttons = styled.TouchableOpacity`
  background: ${colors.GrayImages};
  width: 48px;
  opacity: 0.8;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
export const ScrollContainer = styled(FlexContainer)`
  height: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const RowTitle = styled(FlexContainer)`
  height: auto;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
export const ColTitle = styled(FlexContainer)`
  flex-direction: column;
`;
export const Section = styled.View`
  top: 5px;
  left: 15px;
`;
export const BoxSelect = styled.View`
  width: 200px;
  height: 35px;
  top: 15px;
  left: -74px;
  margin-bottom: 30px;
`;
export const BoxSchedules = styled.View`
  width: 320px;
  height: 150px;
  top: 5px;
`;
export const BoxPrice = styled.View`
  width: ${({w}) => w ?? '180px'};
  height: 60px;
  top: -30px;
`;
export const PriceLine = styled.View`
  width: auto;
  min-width: 130px;
  top: -8px;
  height: 8px;
  background: ${colors.blue};
`;
export const BoxReaction = styled.View`
  background: ${colors.darkGray};
  border-radius: 10px;
  width: 108px;
  left: -5px;
  top: 2px;
  height: 50px;
  justify-content: center;
`;
export const Title = styled(TitleText)`
  justify-content: flex-start;
  height: ${({h}) => h ?? '100%'};
`;
export const TitlePrice = styled(TitleText)`
  justify-content: flex-start;
  height: ${({h}) => h ?? '100%'};
  text-align: right;
  padding: 0px 10px;
`;
export const TitleReaction = styled(TitleText)`
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  margin: 2px;
  width: 110px;
`;
export const Point = styled.View`
  background: ${colors.blue};
  position: relative;
  top: -8px;
  left: -180px;
  width: 14px;
  border-radius: 14px;
  height: 14px;
`;
export const DetailsText = styled(InputLabel)`
  left: 0;
  top: 30px;
  text-align: left;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  width: 350px;
  height: 280px;
`;
export const Loading = styled.ActivityIndicator`
    width: 100%;
    height: 300px;
`;