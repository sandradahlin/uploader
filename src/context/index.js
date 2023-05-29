import React, { useReducer } from "react";
import reducer from "./reducer";
import { ADD_FILE, FILE_ANALYSE, SET_CURRENT } from "./actions";

export const AppContext = React.createContext();

const initialState = {
  currentFile: null,
  files: [],
  fileAnalysed: false,
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFile = (file) => {
    dispatch({ type: ADD_FILE, payload: file });
  };

  const analyseFile = () => {
    dispatch({ type: FILE_ANALYSE });
  };

  const setCurrentFile = (file) => {
    console.log("hej", file)
    dispatch({ type: SET_CURRENT, payload: file });
  };

  return (
    <AppContext.Provider
      value={{ ...state, addFile, analyseFile, setCurrentFile }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
