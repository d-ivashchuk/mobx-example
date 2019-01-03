import React from 'react';

import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect, getIn } from 'formik';

const CustomField = ({ field, label, form: { touched, errors }, ...props }) => {
  return (
    <React.Fragment>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type="text" {...field} {...props} />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <div className="error">{getIn(errors, field.name)}</div>
      )}
    </React.Fragment>
  );
};

export default connect(CustomField);
