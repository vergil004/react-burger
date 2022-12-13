import { ChangeEvent, useState } from "react";

type TEvent = (event: ChangeEvent<HTMLInputElement>) => void;

type TForm = {
  [key: string]: string;
};

export function useForm(inputValues: TForm) {
  console.log(inputValues);
  const [values, setValues] = useState(inputValues);

  const handleChange: TEvent = (event) => {
    const { value, name } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };
  console.log(values);
  return { values, handleChange, setValues };
}
