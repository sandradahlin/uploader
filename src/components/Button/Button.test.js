import { render, screen } from "@testing-library/react";
import * as AppContext from "../../context";
import Button from "./Button";

describe("Button component", () => {
  const testProps = {
    text: "Title",
    primary: true,

  };
  beforeEach(() => {
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without error", () => {
    // Arrange
    expect.assertions(3)

    // Act
    render(<Button {...testProps} />);
    const button = screen.getByTestId("button");
    screen.debug();

    // Assert
    expect(button).toBeVisible();
    expect(button).toHaveStyle('border-color: transparent');
    expect(button).toHaveTextContent(testProps.text);

  });

  it("renders wide button", () => {
    // Arrange
  
    expect.assertions(2)
    const testProps = {
        text: "Title",
        wide: true,
    
      };

    // Act
    render(<Button {...testProps} />);

    const button = screen.getByTestId("button");

    // Assert
    expect(button).toBeVisible();
    expect(button).toHaveStyle('margin: 3rem 0');

  });
});
