import React, { useCallback, useState } from 'react';
import { Text,View } from 'react-native';
import Slider from 'rn-range-slider';

import Thumb from '../../Slider/Thumb';
import Rail from '../../Slider/Rail';
import RailSelected from '../../Slider/RailSelected';
import Notch from '../../Slider/Notch';
import Label from '../../Slider/Label';

import styles from './styles';

export const SliderScreen = () => {
  const [low, setLow] = useState(0);
  const renderThumb = useCallback(() => <Thumb/>, []);
  const renderRail = useCallback(() => <Rail/>, []);
  const renderRailSelected = useCallback(() => <RailSelected/>, []);
  const renderLabel = useCallback(value => <Label text={value}/>, []);
  const renderNotch = useCallback(() => <Notch/>, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
  }, []);
  return <View style={styles.root}>
    <Slider 
      style={styles.slider}
      min={0}
      max={5}
      step={1}
      disableRange={true}
      floatingLabel={false}
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      onValueChanged={handleValueChange}
    />
      <Text style={styles.valueText}>{low}</Text>
    
  </View>;
};


