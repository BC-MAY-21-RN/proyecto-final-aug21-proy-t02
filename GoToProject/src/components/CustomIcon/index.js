import React from 'react';
import Icon from 'react-native-ionicons';

export const CustomIcon = ({name,size,left = 0 ,color}) => {
    return(
        <Icon name={name} style={{fontSize: size,left:left, color: color}} />
    )
}
