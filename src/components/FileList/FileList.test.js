import { render, screen } from "@testing-library/react";
import FileList from "./FileList";
import * as AppContext from "../../context";

const contextValues = {
  files: [{ name: "test" }],
  currentFile: null,
  setLoading: jest.fn(),
};

describe("FileList component", () => {
  beforeEach(() => {
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
  });

  it("renders fileList correctly and does not show No uploaded files text", () => {
    // Arrange
    expect.assertions(2);

    // Act
    render(<FileList />);

    const list = screen.getByTestId("file-list");
    const noFilesText = screen.queryByTestId("no-files-text");

    // Assert
    expect(list).toBeVisible();
    expect(noFilesText).not.toBeInTheDocument();
  });

  
  it("renders fileList correctly and does not show No uploaded files text if there are files", () => {
    // Arrange
    expect.assertions(1);

    const contextValues = {
        files: [],
        currentFile: null,
        setLoading: jest.fn(),
      };
      jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);

    // Act
    render(<FileList />);
    
    const noFilesText = screen.queryByTestId("no-files-text");

    // Assert
    expect(noFilesText).toBeVisible();
  });
});
