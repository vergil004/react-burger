import { ChangeEvent, useState } from "react";
import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch,
} from "react-redux";
import { RootState, AppDispatch } from "../services/types";

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

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useAppDispatch: () => AppDispatch = useDispatch;
