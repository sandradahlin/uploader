import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title component", () => {
  const testProps = {
    title: "Title",
  };

  it("renders secondary title", () => {
    // Arrange
    expect.assertions(2);

    // Act
    render(<Title {...testProps} />);

    const button = screen.getByTestId("title");

    // Assert
    expect(button).toBeVisible();
    expect(button).toHaveTextContent(testProps.title);
  });

  it("renders main title", () => {
    // Arrange
    expect.assertions(3);
    const testProps = {
      title: "Title",
      main: true,
    };

    // Act
    render(<Title {...testProps} />);

    const button = screen.getByTestId("main-title");

    // Assert
    expect(button).toBeVisible();
    expect(button).toHaveTextContent(testProps.title);
    expect(button).toHaveStyle("text-align: center");
  });
});
