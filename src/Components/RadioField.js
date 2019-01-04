import React from 'react';

import { ControlLabel, FormGroup, Radio } from 'react-bootstrap';

const RadioField = ({ field, label, form, options }) => {
  const radioGroup =
    options && Array.isArray(options)
      ? options.map(element => (
          <Radio
            checked={field.value === element.value}
            key={element.label}
            name="radioGroup"
            onChange={() => form.setFieldValue(field.name, element.value)}
          >
            {element.value}
          </Radio>
        ))
      : null;
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      {radioGroup}
    </FormGroup>
  );
};

export default RadioField;
