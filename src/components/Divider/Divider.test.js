import { render, screen } from "@testing-library/react";
import Divider from "./Divider";

describe("Divider component", () => {
  it("renders without error", () => {
    // Arrange
    expect.assertions(3);

    // Act
    render(<Divider />);

    const divider = screen.getByTestId("divider");

    //Assert
    expect(divider).toBeVisible();
    expect(divider).toHaveStyle("width: 90%");
    expect(divider).toHaveStyle("height: 1px");
  });
});
