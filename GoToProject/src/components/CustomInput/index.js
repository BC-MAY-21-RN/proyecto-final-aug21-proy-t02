import React from 'react'
import { FlexContainer, InputLabel, InputText } from '../styled'

export const CustomInput = ({...props}) => {
    return (
        <FlexContainer h="100px" alin >
            <InputLabel>{props.label}</InputLabel>
            <InputText />
        </FlexContainer>
    )
}

