import { render, screen,renderHook } from "@testing-library/react";
import TextRenderer from "./TextRenderer";
import userEvent from "@testing-library/user-event";

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
    expect.assertions(2);

    // Act
    render(<TextRenderer />);
    const component = screen.getByTestId("text-renderer");
    const componentTextContent = screen.getByTestId("uploaded-text-content");

    screen.debug()
    // Assert
    expect(component).toBeVisible();
    expect(componentTextContent).toHaveTextContent();
  });

//   it.only("renders TextRenderer with replacedText after analyse", () => {
//     // Arrange
//     expect.assertions(2);
//     const contextValues = {
//       files: [{ name: "test" }],
//       replacedText: "testfoo",
//       processedText: "test",
//       analyseFile: jest.fn(),
//     };

//     jest
//       .spyOn(AppContext, "useAppContext")
//       .mockImplementation(() => contextValues);

//     // Act
//     render(
//       <>
//         <TextRenderer />
//         <button type="button" data-testid="test-button" onClick={() => contextValues.analyseFile()}/>
//       </>
//     );
//     const button = screen.getByTestId("test-button");

//     userEvent.click(button)
//     const component = screen.getByTestId("text-renderer");
//     const componentTextContent = screen.getByTestId("uploaded-text-content");

//     screen.debug();

//     // Assert
//     expect(component).toBeVisible();
//     expect(componentTextContent).toHaveTextContent();
//   });
});
