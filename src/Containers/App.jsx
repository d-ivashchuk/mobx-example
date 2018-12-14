import React, { Component } from 'react';
import '../App.css';

import { observer } from 'mobx-react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
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
} from 'react-bootstrap';

import styles from './App.module.css';

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

    const validationSchema = Yup.object().shape({
      todo: Yup.string()
        .min(3, 'Try using more explicit todos to achive better results')
        .required('Type some text to add todo'),
    });

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
                this.createNew(values.todo);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isSubmitting, values }) => (
                <Form>
                  <Field type="text" name="todo" value={values.todo || ''} />
                  <ErrorMessage
                    className={styles.error}
                    name="todo"
                    component="div"
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
