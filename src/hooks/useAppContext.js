import { useContext } from "react";
import AppContext from "../context";

export const useAppContext = () => {
  console.log("hej**********")
  return useContext(AppContext);
};
