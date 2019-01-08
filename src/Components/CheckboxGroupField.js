import React from 'react';

import { Checkbox, ControlLabel, Button } from 'react-bootstrap';

const CheckboxGroupField = ({ options, field, label, form }) => {
  const checkboxGroup = options.map(element => {
    return (
      <Checkbox
        checked={field.value.includes(element.value)}
        key={element.label}
        name="radioGroup"
        onChange={() => form.setFieldValue(field.name, ['x'])}
      >
        {element.value}
      </Checkbox>
    );
  });
  return (
    <React.Fragment>
      <ControlLabel>{label}</ControlLabel>
      {checkboxGroup}
      <Button
        onClick={() =>
          form.setFieldValue(field.name, options.map(i => i.value))
        }
      >
        Add all
      </Button>
      <Button onClick={() => form.setFieldValue(field.name, [''])}>
        Remove all
      </Button>
    </React.Fragment>
  );
};

export default CheckboxGroupField;
