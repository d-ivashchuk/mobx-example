import React from 'react';

import { Tabs } from 'react-bootstrap';

const CustomTabs = ({ children }) => {
  return (
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      {children}
    </Tabs>
  );
};

export default CustomTabs;
