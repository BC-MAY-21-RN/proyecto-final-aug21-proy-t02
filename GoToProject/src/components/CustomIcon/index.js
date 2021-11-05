import React from 'react';
import Icon from 'react-native-ionicons';

export const CustomIcon = ({name,size,color}) => {
    return(
        <Icon name={name} style={{fontSize: size, color: color}} />
    )
}
