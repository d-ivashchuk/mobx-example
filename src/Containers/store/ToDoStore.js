import { observable, computed } from 'mobx';

class ToDo {
  @observable value;

  @observable id;

  @observable complete;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }
}

class ToDoStore {
  @observable toDos = [];

  @observable filter = '';

  @computed get filteredToDos() {
    const matchesFilter = new RegExp(this.filter, 'i');
    return this.toDos.filter(
      todo => !this.filter || matchesFilter.test(todo.value),
    );
  }

  createToDo(value) {
    this.toDos.push(new ToDo(value));
  }

  clearCompleted = () => {
    const incompleteToDos = this.toDos.filter(todo => !todo.complete);
    this.toDos.replace(incompleteToDos);
  };
}

const store = new ToDoStore();

export default store;
