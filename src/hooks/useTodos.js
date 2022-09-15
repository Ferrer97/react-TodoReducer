import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[Add todo]",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[Delete todo]",
      payload: id,
    };
    dispatchTodo(action);
  };

  const handleDoneTodo = (id) => {
    const action = {
      type: "[Done todo]",
      payload: id,
    };
    dispatchTodo(action);
  };

  const handleEditTodo = (todo) => {
    const action = {
      type: "[Edit todo]",
      payload: todo,
    };
    dispatchTodo(action);
  };
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleDoneTodo,
    handleEditTodo,
  };
};
