import React, { useReducer } from "react";

export const NewReviewForm = () => {
  type Reducer<State, Action> = (state: State, action: Action) => State;
  type State = { name: string; text: string; rating: number };

  const initialState: State = {
    name: "Tim",
    text: "Text",
    rating: 10,
  };

  enum FORM_ACTIONS {
    setName = 'setName',
    setText = 'setText',
    setRating = 'setRating',
  }

  type Action = {
    type: FORM_ACTIONS;
    payload: {name?: string, text?: string, rating?: string }
  }

  // const setNameAction: Action = {
  //   type: FORM_ACTIONS.setName,
  //   payload: { name: event.target.value }
  // }

  const reducer = (state: State, action: Action): State => {
    switch (action?.type) {
      case "setName":
        return { name: action.payload.name, text: "", rating: 0 };
      case "setText":
        return { ...state, text: action.payload.text };
      case "setRating":
        return { ...state, rating: action.payload.rating };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: FORM_ACTIONS.setName,
      payload: { name: event.target.value },
    });

  return (
    <div>
      <label>
        Name:
        <input value={state.name} onChange={onNameChange} type="text" />
      </label>
      <label>
        Text:
        <input type="text" />
      </label>
      <label>
        Rating:
        <input type="number" />
      </label>
    </div>
  );
};
