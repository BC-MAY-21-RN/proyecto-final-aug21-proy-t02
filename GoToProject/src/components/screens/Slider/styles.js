import {StyleSheet} from 'react-native';
import { colors } from '../../../library/constants/colors';
export default StyleSheet.create({
  root: {
    flex: 1,
    height: 34,
    width: 200,
  },
  slider: {
    top: -50,
  },
  valueText: {
    position: 'absolute',
    fontSize:25,
    fontWeight:'300',
    top:-42,
    left: 130,
    color:colors.lettersGray,
  },
});
