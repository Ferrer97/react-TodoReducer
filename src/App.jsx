import { TodoAdd, TodoList } from "./components";
import { useTodos } from "./hooks/useTodos";

import "./todoApp.css";

function App() {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleDoneTodo,
    handleEditTodo,
  } = useTodos();

  return (
    <main className="todoContainer">
      <h1 className="title">Todo APP</h1>
      <hr />
      <div className="Todos">
        <TodoAdd handleNewTodo={handleNewTodo} />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleDoneTodo={handleDoneTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </main>
  );
}

export default App;
