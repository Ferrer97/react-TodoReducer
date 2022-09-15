import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos = [],
  handleDeleteTodo,
  handleDoneTodo,
  handleEditTodo,
}) => {
  return (
    <ul className="todosContainer">
      {todos.length === 0 && <h3 className="title">No task yet</h3>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleDoneTodo={handleDoneTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </ul>
  );
};
