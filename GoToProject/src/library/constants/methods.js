import React from 'react';
import {CustomInput} from '../../components/CustomInput';

export const Inputs = ({
  obj,
  handleChange,
  errors,
  touched,
  values,
  actionPassword,
  shwPassword,
  showEye=false
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
            shwPassword={shwPassword}
            showEye={showEye}
            eye={index && 1 ? true : false}
          />
        )))
      }
    </>
  );
};
