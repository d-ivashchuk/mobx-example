import React from 'react';

import { ControlLabel, FormGroup, Radio } from 'react-bootstrap';

const CheckBoxField = ({ field, label, children }) => {
  const radioGroup =
    field.value && Array.isArray(field.value)
      ? field.value.map(e => (
          <Radio key={e} name="radioGroup">
            {e}
          </Radio>
        ))
      : null;
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      {radioGroup}
      {children}
    </FormGroup>
  );
};

export default CheckBoxField;
