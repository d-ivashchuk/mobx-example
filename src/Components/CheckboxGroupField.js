import React from 'react';

import { Checkbox, ControlLabel, Button } from 'react-bootstrap';

const CheckboxGroupField = ({ options, field, label, form }) => {
  const checkboxGroup = options.map(element => {
    return (
      <Checkbox
        checked={field.value.includes(element.value)}
        key={element.label}
        name="radioGroup"
        onChange={() =>
          field.value.includes(element.value)
            ? form.setFieldValue(
                field.name,
                field.value.filter(e => e !== element.value),
              )
            : form.setFieldValue(field.name, [...field.value, element.value])
        }
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
      <Button onClick={() => form.setFieldValue(field.name, [])}>
        Remove all
      </Button>
    </React.Fragment>
  );
};

export default CheckboxGroupField;
