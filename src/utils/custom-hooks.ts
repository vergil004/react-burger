import { ChangeEvent, useState } from "react";

type TEvent = (event: ChangeEvent<HTMLInputElement>) => void;

type TForm = {
  [key: string]: string;
};

export function useForm(inputValues: TForm) {
  const [values, setValues] = useState(inputValues);

  const handleChange: TEvent = (event) => {
    const { value, name } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
