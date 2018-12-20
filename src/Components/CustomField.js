import React from 'react';

import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect, getIn } from 'formik';

const CustomField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const error = getIn(props.formik.errors, props.name);
  console.log(error);
  return (
    <div>
      <ControlLabel>{field.name}</ControlLabel>
      <FormControl type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default connect(CustomField);
