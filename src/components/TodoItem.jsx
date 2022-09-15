import { useState } from "react";

export const TodoItem = ({
  todo = [],
  handleDeleteTodo,
  handleDoneTodo,
  handleEditTodo,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  function FormEdit() {
    const [newValue, setNewValue] = useState(todo.description);

    const handleSubmit = (evt) => {
      evt.preventDefault();
    };

    const handleClick = () => {
      handleEditTodo({ ...todo, description: newValue });
      setIsEdit(false);
    };

    const onInputChange = (evt) => {
      const value = evt.target.value;
      setNewValue(value);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={onInputChange}
          value={newValue}
        />
        <button className="buttonUpdate" onClick={handleClick}>
          Update
        </button>
      </form>
    );
  }

  function TodoElemnt() {
    return (
      <>
        <li className="todoInfo">
          <span className={`${todo.done ? "done" : ""} todoTitle`}>
            {todo.description}
          </span>
          <button
            className="buttonDelete"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            Delete
          </button>
          <button
            className="button"
            onClick={() => handleDoneTodo(todo.id)}
          >
            Done
          </button>
          <button className="buttonUpdate" onClick={handleEdit}>
            Edit
          </button>
        </li>
      </>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElemnt />}</div>;
};
