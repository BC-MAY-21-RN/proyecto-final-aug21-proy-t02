import React from 'react'
import { CustomButton, FlexContainer, TextButton } from '../styled'

export const ButtonCustom = ({...props}) => {
    return (
        <FlexContainer h={props.h} mt={props.mt}>
            <CustomButton h="45%">  
            <TextButton>{props.text}</TextButton>
            </CustomButton>
        </FlexContainer>
    )
}

