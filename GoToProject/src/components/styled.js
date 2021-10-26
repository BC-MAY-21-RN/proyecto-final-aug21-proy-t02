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
background:${({c}) => c ?? colors.blue};
border:${({br}) => br ?? 'none'}; 
justify-content: center;
align-items: center;
display: flex;
margin-top: 5px;
width: ${({w}) => w ?? '100%'};
height: ${({h}) => h ?? '100%'};
border-radius: 50px;
margin-bottom: ${({mbt}) => mbt ?? '10px'};
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
  color: ${colors.lettersGray};
  font-size: 15px;
  margin-Top: 5px;
  left: 10px;
`;

export const FlexContainer = styled.View`
  background-color: ${({bg}) => bg ?? 'transparent'};
  display: flex;
  justify-content: ${({jc}) => jc ?? 'space-around'};
  align-items: ${({alin}) => (alin ? 'flex-start' : 'center')};
  margin-top: ${({mt}) => mt ?? '1px'};
  margin-bottom: ${({mbt}) => mbt ?? '10px'};
  width: ${({w}) => w ?? '100%'};
  height: ${({h}) => h ?? '100%'};
  border: white;
`;
