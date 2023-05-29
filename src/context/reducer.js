import { ADD_FILE, FILE_ANALYSE } from "./actions";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_FILE: {
      console.log(payload);
      return {
        ...state,
        files: [...state.files, payload],
        currentFile: payload,
        setFile: true,
        fileAnalysed: false
      };
    }
    case FILE_ANALYSE:
      return { ...state, fileAnalysed: true };
    default:
      return { ...state };
  }
};

export default reducer;
