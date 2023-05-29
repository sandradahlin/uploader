import React, { useReducer } from "react";
import reducer from "./reducer";
import { ADD_FILE, FILE_ANALYSE } from "./actions";

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
    dispatch({ type: FILE_ANALYSE});
  };

  return (
    <AppContext.Provider value={{ ...state, addFile, analyseFile }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
