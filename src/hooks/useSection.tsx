import { SectionContext } from "$providers";
import { useContext } from "react";

export const useSection = () => useContext(SectionContext);