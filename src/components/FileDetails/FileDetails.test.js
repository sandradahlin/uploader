import { render, screen } from "@testing-library/react";
import FileDetails from "./FileDetails";
import * as AppContext from "../../context";

const contextValues = {
  files: [{ name: "test" }],
  processedText: "Hello this is test test file",
  replaceText: jest.fn(),
  toggleModal: jest.fn(),
};

describe("FileDetails component", () => {
  beforeEach(() => {
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
  });

  it("renders FileDetails correctly", () => {
    // Arrange
    expect.assertions(2);

    // Act
    render(<FileDetails />);

    const list = screen.getByTestId("file-details");
    const noFilesText = screen.queryByTestId("no-files-text");

    // Assert
    expect(list).toBeVisible();
    expect(noFilesText).not.toBeInTheDocument();
  });
});
