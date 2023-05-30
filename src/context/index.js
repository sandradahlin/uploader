import React, { useReducer } from "react";
import reducer from "./reducer";
import {
  ADD_FILE,
  FILE_ANALYSE,
  SET_CURRENT,
  PROCESS_TEXT,
  REPLACE_TEXT,
} from "./actions";

export const AppContext = React.createContext();

const initialState = {
  currentFile: null,
  files: [],
  fileAnalysed: false,
  processedText: null,
  replacedText: null,
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
    dispatch({ type: SET_CURRENT, payload: file });
  };

  const processText = (text) => {
    dispatch({ type: PROCESS_TEXT, payload: text });
  };

  const replaceText = (text) => {
    dispatch({ type: REPLACE_TEXT, payload: text });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addFile,
        analyseFile,
        setCurrentFile,
        processText,
        replaceText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
