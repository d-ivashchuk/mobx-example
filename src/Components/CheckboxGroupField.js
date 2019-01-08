import React from 'react';

import { Checkbox, ControlLabel } from 'react-bootstrap';

const CheckboxGroupField = ({ options, field, label }) => {
  console.log(field.value);
  const checkboxGroup = options.map(element => {
    return (
      <Checkbox
        checked={field.value.includes(element.value)}
        key={element.label}
        name="radioGroup"
        onChange={() => console.log(element.value)}
      >
        {element.value}
      </Checkbox>
    );
  });
  return (
    <React.Fragment>
      <ControlLabel>{label}</ControlLabel>
      {checkboxGroup}
    </React.Fragment>
  );
};

export default CheckboxGroupField;
