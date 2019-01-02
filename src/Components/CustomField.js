/* eslint-disable */
import React from 'react';

import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect, getIn } from 'formik';

const CustomField = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div>
      <ControlLabel>{field.name}</ControlLabel>
      <FormControl type="text" {...field.value} {...props} />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <div className="error">{getIn(errors, field.name)}</div>
      )}
    </div>
  );
};

export default connect(CustomField);
