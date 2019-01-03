import React, { Component } from 'react';
import '../App.css';

import { observer } from 'mobx-react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  ButtonToolbar,
  Button,
  ListGroup,
  ListGroupItem,
  PageHeader,
  FormControl,
  Grid,
  Row,
  Col,
  Tab,
} from 'react-bootstrap';

import styles from './App.module.css';

import TextField from '../Components/TextField';
import CheckBoxField from '../Components/CheckBoxField';
import CustomTabs from '../Components/CustomTabs';

const validationSchema = Yup.object().shape({
  todo: Yup.object().shape({
    description: Yup.string()
      .default('')
      .min(3, 'Try using more explicit todos to achive better results')
      .required('Type some text to add todo'),
    important: Yup.boolean().default(false),
    tag: Yup.string().default('private'),
  }),
});

@observer
class App extends Component {
  createNew = value => {
    this.props.store.createToDo(value);
  };

  filter = e => {
    this.props.store.filter = e.target.value;
  };

  toggleComplete = todo => {
    todo.complete = !todo.complete;
  };

  render() {
    const { filter, filteredToDos, clearCompleted } = this.props.store;

    const toDosList = filteredToDos.map((element, index) => (
      <ListGroupItem key={index}>
        <FormControl
          style={{ marginRight: '15px' }}
          type="checkbox"
          value={element.complete}
          checked={element.complete}
          onChange={() => this.toggleComplete(element)}
        />
        <div className={!element.complete ? styles.todo : styles.completed}>
          {element.value}
        </div>
      </ListGroupItem>
    ));

    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <PageHeader>MobX Todo App</PageHeader>
            </Col>

            <Formik
              initialValues={validationSchema.default()}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values.todo.bool);
                this.createNew(values.todo.description);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="todo" component={CustomTabs}>
                    <Tab eventKey="public" title="Tab 1">
                      public
                    </Tab>
                    <Tab eventKey="private" title="Tab 2">
                      private
                    </Tab>
                  </Field>
                  <Field
                    type="text"
                    name="todo.description"
                    label="description"
                    component={TextField}
                  />

                  <Field
                    type="checkbox"
                    name="todo.bool"
                    label="boolean"
                    component={CheckBoxField}
                  />

                  <button type="submit" disabled={isSubmitting}>
                    Add todo
                  </button>
                </Form>
              )}
            </Formik>

            <FormControl
              bsClass="input"
              type="text"
              placeholder="search"
              value={filter}
              onChange={this.filter}
            />
          </Row>

          <ListGroup>{toDosList}</ListGroup>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={clearCompleted}>
              Clear Completed
            </Button>
          </ButtonToolbar>
        </Grid>
      </div>
    );
  }
}

export default App;
