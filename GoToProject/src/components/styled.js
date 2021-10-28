import styled from 'styled-components/native';
import {colors} from '../library/constants/colors';

export const Layout = styled.View`
  background-color: ${colors.black};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const MainContainer = styled.SafeAreaView`
  display: flex;
  padding: 15px;
  flex-direction: column;
  background: ${colors.black};
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  background: ${({c}) => c ?? colors.blue};
  border: ${({br}) => br ?? 'none'};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 5px;
  width: ${({w}) => w ?? '100%'};
  height: ${({h}) => h ?? '100%'};
  border-radius: 50px;
  margin-bottom: ${({mbt}) => mbt ?? '10px'};
`;
export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  zindex: 2px;
  right: 15px;
  top: 130px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: 'Arial';
  font-size: 18px;
  font-weight: bold;
`;

export const InputText = styled.TextInput`
  background: ${colors.darkGray};
  width: 100%;
  height: 35%;
  margin-top: 10px;
  border-radius: 13px;
  padding-left: 10px;
  color: ${colors.white};
`;
export const InputLabel = styled.Text`
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({color}) => color ?? colors.lettersGray}; 
  font-size: ${({fonz}) => fonz ?? '15px'}; 
  font-weight: ${({fontt}) => fontt ?? 'normal'};
  margin-bottom: ${({bot}) => bot ?? '0px'};
  margin-top: ${({top}) => top ?? '5px'};
  margin-left: ${({ml}) => ml ?? '0px'};
  margin-right: ${({mr}) => mr ?? '0px'};
  left:${({left}) => left ?? '10px'} 
`;
export const ImageLabel = styled(InputLabel)`
  font-weight: bold;
  color: ${colors.white};
  font-size: 25px;
  width: ${({w}) => w ?? '200px'};
  left: -50px;
  top: -50px;
`;

export const FlexContainer = styled.View`
  background-color: ${({bg}) => bg ?? 'transparent'};
  display: flex;
  justify-content: ${({jc}) => jc ?? 'space-around'};
  align-items: ${({alin}) => (alin ? 'flex-start' : 'center')};
  flex-direction: ${({dir}) => (dir ?? 'column')};
  margin-top: ${({mt}) => mt ?? '1px'};
  margin-bottom: ${({mbt}) => mbt ?? '10px'};
  width: ${({w}) => w ?? '100%'};
  height: ${({h}) => h ?? '100%'};
`;
