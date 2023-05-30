import { ADD_FILE, FILE_ANALYSE, SET_CURRENT, PROCESS_TEXT } from "./actions";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, payload],
        currentFile: payload,
        setFile: true,
        fileAnalysed: false,
      };
    case FILE_ANALYSE:
      return { ...state, fileAnalysed: true };
    case SET_CURRENT:
      return {
        ...state,
        currentFile: payload,
        setFile: true,
        fileAnalysed: false,
      };
    case PROCESS_TEXT:
      return { ...state, processedText: payload };
    default:
      return { ...state };
  }
};

export default reducer;
