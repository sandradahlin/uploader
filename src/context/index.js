import React, { useReducer } from "react";
import reducer from "./reducer";
import {
  ADD_FILE,
  FILE_ANALYSE,
  SET_CURRENT,
  PROCESS_TEXT,
  REPLACE_TEXT,
  TOGGLE_MODAL,
  SET_LOADING,
  SET_LOADING_DONE,
} from "./actions";

export const AppContext = React.createContext();

const initialState = {
  currentFile: null,
  files: [],
  fileAnalysed: false,
  processedText: null,
  replacedText: null,
  modalVisible: false,
  loading: false,
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
  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const setLoadingDone = () => {
    dispatch({ type: SET_LOADING_DONE });
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
        toggleModal,
        setLoading,
        setLoadingDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
