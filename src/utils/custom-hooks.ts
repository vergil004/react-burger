import { ChangeEvent, useState } from "react";

type TEvent = (event: ChangeEvent<HTMLInputElement>) => void;

export function useForm(inputValues: any) {
  const [values, setValues] = useState(inputValues);

  const handleChange: TEvent = (event) => {
    const { value, name } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
