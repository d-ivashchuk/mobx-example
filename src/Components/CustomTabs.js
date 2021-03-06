import React from 'react';

import { Tabs } from 'react-bootstrap';

const CustomTabs = ({ children, field, form }) => {
  return (
    <Tabs
      activeKey={field.value}
      onSelect={val => {
        form.setFieldValue(field.name, val);
      }}
      id="controlled-tab-example"
    >
      {children}
    </Tabs>
  );
};

export default CustomTabs;
