import React from 'react';

import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect, getIn } from 'formik';

const CheckBoxField = ({
  field,
  label,
  form: { touched, errors },
  ...props
}) => {
  return (
    <div>
      {/* <ControlLabel>{label}</ControlLabel>
      <FormControl type="text" {...field} {...props} />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <div className="error">{getIn(errors, field.name)}</div>
      )} */}
    </div>
  );
};

export default connect(CheckBoxField);
