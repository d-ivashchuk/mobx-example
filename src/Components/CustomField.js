/* eslint-disable */
import React from 'react';

import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect, getIn } from 'formik';

const CustomField = ({ field, form: { touched, errors }, ...props }) => {
  console.log(field.name);
  return (
    <div>
      <ControlLabel>{field.name}</ControlLabel>
      <FormControl type="text" value={field.value} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default connect(CustomField);
