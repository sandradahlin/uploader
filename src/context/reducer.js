import {
  ADD_FILE,
  FILE_ANALYSE,
  SET_CURRENT,
  PROCESS_TEXT,
  REPLACE_TEXT,
  TOGGLE_MODAL,
  SET_LOADING,
} from "./actions";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, payload.file],
        currentFile: payload.file,
        setFile: true,
        fileAnalysed: false,
        processedText: payload.fileText,
      };
    case FILE_ANALYSE:
      return {
        ...state,
        fileAnalysed: true,
        modalVisible: !state.modalVisible,
      };
    case SET_CURRENT:
      return {
        ...state,
        currentFile: payload,
        setFile: true,
        fileAnalysed: false,
      };
    case PROCESS_TEXT:
      return { ...state, processedText: payload };
    case REPLACE_TEXT:
      return { ...state, replacedText: payload };
    case TOGGLE_MODAL:
      return { ...state, modalVisible: !state.modalVisible };
    case SET_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return { ...state };
  }
};

export default reducer;
