import { FormContext } from "$providers";
import { useContext } from "react";

export const useForm = () => useContext(FormContext);