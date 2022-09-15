import { useState } from "react";

export const useForm = ( initialState = '' ) => {
  const [description, setDescription] = useState(initialState);

  const onInputChange = ({target}) => {
    setDescription(target.value);
  }

  const onResetForm = () => {
    setDescription('');
  }

  return {
    ...description,
    description,
    onInputChange,
    onResetForm,
    setDescription
  };
};

