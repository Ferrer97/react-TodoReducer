import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { onInputChange, onResetForm, description } = useForm();

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      done: false,
      description: description,
      id: new Date().getTime(),
    };

    handleNewTodo(newTodo);

    onResetForm();
  };

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={onFormSubmit}>
        <input
          className="todoInput"
          type="text"
          placeholder="Nueva tarea"
          name="description"
          autoComplete="off"
          value={description}
          onChange={onInputChange}
        />

        <button className="buttonCreate" >Submit</button>
      </form>
    </div>
  );
};
