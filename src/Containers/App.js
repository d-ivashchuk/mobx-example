import React, { Component } from "react";
import "../App.css";

import styled from "styled-components";
import { observer } from "mobx-react";

const StyledTodo = styled.li`
  opacity: ${props => (props.completed ? "0.7" : "1")};
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
  transition: all 0.3s;
`;
const StyledInput = styled.input`
  margin: 15px;
  font-size: 16px;
  padding: 8px;
  border-radius: 1px;
  border: none;
`;
const StyledButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  color: #777;
`;

@observer
class App extends Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createToDo(e.target.value);
      e.target.value = "";
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }
  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }

  render() {
    const { filter, filteredToDos, clearCompleted } = this.props.store;
    const toDosList = filteredToDos.map((element, index) => (
      <StyledTodo key={index} completed={element.complete}>
        <StyledInput
          style={{ marginRight: "15px" }}
          type="checkbox"
          value={element.complete}
          checked={element.complete}
          onChange={this.toggleComplete.bind(this, element)}
        />
        {element.value}
      </StyledTodo>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <h1>MobX Todo App</h1>
          <div>
            <StyledInput
              type="text"
              placeholder="New todo"
              onKeyPress={this.createNew.bind(this)}
            />
            <StyledInput
              type="text"
              placeholder="search"
              value={filter}
              onChange={this.filter.bind(this)}
            />
          </div>

          <ul style={{ listStyleType: "none", padding: "0" }}>{toDosList}</ul>
          <StyledButton onClick={clearCompleted}>Clear Completed</StyledButton>
        </header>
      </div>
    );
  }
}

export default App;
