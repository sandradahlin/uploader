import { ADD_FILE } from "./actions";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_FILE:
      return { ...state, files: [...state.files, payload.file] };
    default:
      return { ...state };
  }
};

export default reducer;
