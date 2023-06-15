import { render, screen } from "@testing-library/react";
import * as AppContext from "../../context";
import File from "./File";

const props = {
  file: { name: "test" },
};

const contextValues = {
  setCurrentFile: jest.fn(),
};

describe("File component", () => {
  beforeEach(() => {
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("render File component correctly", () => {
    // Arrange
    expect.assertions(2);

    // Act
    render(<File {...props} />);
    
    const file = screen.getByTestId("file-item");

    // Assert
    expect(file).toBeVisible();
    expect(file).toHaveTextContent(props.file.name);
  });
});
