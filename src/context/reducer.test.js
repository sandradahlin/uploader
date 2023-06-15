import reducer from "./reducer";
import * as actions from "./actions";

const currentState = {
  currentFile: null,
  files: [],
  fileAnalysed: false,
  processedText: null,
  replacedText: null,
  modalVisible: false,
  loading: false,
};

describe("Reducer", () => {
  it("returns default state if no matching action", () => {
    // Arrange
    expect.assertions(2);

    // Act
    const newState = reducer(currentState, {});

    // Assert
    expect(newState).not.toBeUndefined();
    expect(newState).toEqual(currentState);
  });

  it(`reduces ${actions.ADD_FILE} correctly`, () => {
    // Arrange
    expect.assertions(6);

    // Act
    const file = { file: { name: "file" }, fileText: "test" };
    const newState = reducer(currentState, {
      type: actions.ADD_FILE,
      payload: file,
    });

    // Assert
    expect(newState).not.toBeUndefined();
    expect(newState).not.toEqual(currentState);
    expect(newState.files).toHaveLength(1);
    expect(newState.currentFile).toEqual({ name: "file" });
    expect(newState.processedText).toEqual("test");
    expect(newState.setFile).toEqual(true);
  });

  it(`reduces ${actions.FILE_ANALYSE} correctly`, () => {
    // Arrange
    expect.assertions(4);

    // Act
    const newState = reducer(currentState, {
      type: actions.FILE_ANALYSE,
    });

    // Assert
    expect(newState).not.toBeUndefined();
    expect(newState).not.toEqual(currentState);
    expect(newState.fileAnalysed).toBe(true);
    expect(newState.modalVisible).toEqual(!currentState.modalVisible);
  });

  it(`reduces ${actions.SET_CURRENT} correctly`, () => {
    // Arrange
    expect.assertions(5);

    // Act
    const file = { name: "file" };
    const newState = reducer(currentState, {
      type: actions.SET_CURRENT,
      payload: file,
    });

    // Assert
    expect(newState).not.toBeUndefined();
    expect(newState).not.toEqual(currentState);
    expect(newState.currentFile).toEqual(file);
    expect(newState.setFile).toEqual(true);
    expect(newState.fileAnalysed).toBe(false);
  });

  it(`reduces ${actions.PROCESS_TEXT} correctly`, () => {
    // Arrange
    expect.assertions(3);

    // Act
    const processed = "text";
    const newState = reducer(currentState, {
      type: actions.PROCESS_TEXT,
      payload: processed,
    });

    // Assert
    expect(newState).not.toBeUndefined();
    expect(newState).not.toEqual(currentState);
    expect(newState.processedText).toEqual(processed);
  });

  it(`reduces ${actions.REPLACE_TEXT} correctly`, () => {
    // Arrange
    expect.assertions(3);

    // Act
    const processed = "text";
    const newState = reducer(currentState, {
      type: actions.REPLACE_TEXT,
      payload: processed,
    });

    // Assert
    expect(newState).not.toBeUndefined();
    expect(newState).not.toEqual(currentState);
    expect(newState.replacedText).toEqual(processed);
  });

  it(`reduces ${actions.TOGGLE_MODAL} correctly`, () => {
    // Arrange
    expect.assertions(3);

    // Act
    const newState = reducer(currentState, {
      type: actions.TOGGLE_MODAL,
    });

    // Assert
    expect(newState).not.toBeUndefined();
    expect(newState).not.toEqual(currentState);
    expect(newState.modalVisible).toEqual(!currentState.modalVisible);
  });

  it(`reduces ${actions.SET_LOADING} correctly`, () => {
    // Arrange
    expect.assertions(3);
    
    // Act
    const newState = reducer(currentState, {
      type: actions.SET_LOADING,
    });

    // Assert
    expect(newState).not.toBeUndefined();
    expect(newState).not.toEqual(currentState);
    expect(newState.loading).toEqual(!currentState.loading);
  });
});
