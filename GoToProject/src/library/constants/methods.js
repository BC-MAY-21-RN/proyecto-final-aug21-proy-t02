import React from "react";
import { CustomInput } from "../../components/CustomInput";

export const Inputs = ({obj, handleChange, errors, touched, values}) => {

  let ouputs
  return(
    <>
    {
      ouputs = obj.map( entry => (
        <CustomInput 
          label={entry.label}
          name={entry.name}
          onChangeText={handleChange(entry.onChangeText)}
          value={values[entry.value]}
          hasErrors={errors[entry.hasErrors]}
          hasTouched={touched[entry.hasTouched]}
        />
      ))
    }
    </>
  );
};
