export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[Add todo]":
      return [...initialState, action.payload];

    case "[Delete todo]":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[Done todo]":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    case "[Edit todo]":
      return initialState.map((todoState) =>
        todoState.id === action.payload.id ? action.payload : todoState
      );

    default:
      return initialState;
  }
};
