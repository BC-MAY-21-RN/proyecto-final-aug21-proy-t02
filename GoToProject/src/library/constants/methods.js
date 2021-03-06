import React from 'react';
import {CustomInput} from '../../components/CustomInput';

export const Inputs = ({
  obj,
  handleChange,
  errors,
  touched,
  values,
  actionPassword,
  showPassword,
  showEye = false,
  num = 0,
}) => {
  let ouputs;
  return (
    <>
      {
        (ouputs = obj.map((entry, index) => (
          <CustomInput
            key={index}
            label={entry.label}
            name={entry.name}
            onChangeText={handleChange(entry.onChangeText)}
            value={values[entry.value]}
            hasErrors={errors[entry.hasErrors]}
            hasTouched={touched[entry.hasTouched]}
            secureTextEntry={entry.secureTextEntry}
            actionPassword={actionPassword}
            showPassword={showPassword}
            showEye={showEye}
            eye={ index==num  ? true : false}
          />
        )))
      }
    </>
  );
};
