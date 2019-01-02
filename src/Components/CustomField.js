/* eslint-disable */
import React from 'react';

import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect, getIn } from 'formik';

const CustomField = ({ field, name, form: { touched, errors }, ...props }) => {
  console.log(field);
  const error = getIn(props.formik.errors, field.name);
  const touch = getIn(props.formik.touched, field.name);
  const value = field.value;
  return (
    <div>
      <ControlLabel>{field.name}</ControlLabel>
      <FormControl type="text" value={value} {...props} />
      {touch && error && <div className="error">{error}</div>}
    </div>
  );
};

export default connect(CustomField);
