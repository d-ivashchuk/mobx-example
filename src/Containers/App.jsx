import React, { Component } from 'react';
import '../App.css';

import { observer } from 'mobx-react';

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

// const StyledTodo = styled.li`
//   opacity: ${props => (props.completed ? '0.7' : '1')};
//   text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
//   transition: all 0.3s;
// `;

@observer
class App extends Component {
  createNew = e => {
    if (e.which === 13) {
      this.props.store.createToDo(e.target.value);
      e.target.value = '';
    }
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
      <ListGroupItem key={index} completed={element.complete}>
        <FormControl
          style={{ marginRight: '15px' }}
          type="checkbox"
          value={element.complete}
          checked={element.complete}
          onChange={() => this.toggleComplete(element)}
        />
        <div
          className={!element.complete ? styles.todo : styles.completed}
          completed={element.complete}
        >
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

            <FormControl
              bsClass="input"
              type="text"
              placeholder="New todo"
              onKeyPress={this.createNew}
            />
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
