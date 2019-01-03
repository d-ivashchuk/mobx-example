import React from 'react';

import { Checkbox, ControlLabel } from 'react-bootstrap';
import { connect } from 'formik';

const CheckBoxField = ({ field, label }) => {
  console.log(field.value);
  return (
    <React.Fragment>
      <ControlLabel>{label}</ControlLabel>
      <Checkbox checked={field.value} {...field} />
    </React.Fragment>
  );
};

export default connect(CheckBoxField);
