import React, { useReducer } from "react";
import reducer from "./reducer";
import { ADD_FILE } from "./actions";

export const AppContext = React.createContext();

const initialState = {
  currentFile: null,
  files: [],
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFile = (file) => {
    dispatch({ type: ADD_FILE, payload: file });
  };

  return (
    <AppContext.Provider value={{ ...state, addFile }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
