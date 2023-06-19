import { render, screen } from "@testing-library/react";
import TextRenderer from "./TextRenderer";

import * as AppContext from "../../context";

const contextValues = {
  files: [{ name: "test" }],
  processedText: "test",
  analyseFile: jest.fn(),
};

describe("TextRenderer component", () => {
  beforeEach(() => {
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
  });

  it("renders TextRenderer correctly", () => {
    // Arrange
    expect.assertions(1);

    // Act
    render(<TextRenderer />);
    const component = screen.getByTestId("text-renderer");

    // Assert
    expect(component).toBeVisible();
  });
});
