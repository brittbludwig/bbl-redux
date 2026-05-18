import { useContext } from "react";
import { StarContext } from "$providers";

export const useStars = () => useContext(StarContext);