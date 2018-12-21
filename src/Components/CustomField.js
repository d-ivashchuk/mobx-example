/* eslint-disable */
import React from 'react';

import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect, getIn } from 'formik';

const CustomField = ({ field, name, form: { touched, errors }, ...props }) => {
  const error = getIn(props.formik.errors, field.name);
  const touch = getIn(props.formik.touched, field.name);
  const value = getIn(props.formik.values, field.name);
  return (
    <div>
      <ControlLabel>{field.name}</ControlLabel>
      <FormControl type="text" {...value} {...props} />
      {touch && error && <div className="error">{error}</div>}
    </div>
  );
};

export default connect(CustomField);
