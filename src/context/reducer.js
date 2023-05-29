import { ADD_FILE, SET_CURRENT_FILE } from "./actions";

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
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
