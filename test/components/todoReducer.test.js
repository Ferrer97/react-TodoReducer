import { todoReducer } from "../../src/components";

describe("pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un todo", () => {
    const action = {
      type: "[Add todo]",
      payload: {
        id: 2,
        description: "Nuevo Todo #2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe de eliminar un todo", () => {
    const action = {
      type: "[Delete todo]",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("debe de cambiar el done", () => {
    const action = {
      type: "[Done todo]",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });

  test("debe de cambiar el description", () => {
    const action = {
      type: "[Edit todo]",
      payload: {
        id: 1,
        description: "Change Todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].description).toEqual("Change Todo");
    expect(newState).toContain(action.payload);
  });
});
