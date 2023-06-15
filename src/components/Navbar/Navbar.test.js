import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import * as AppContext from "../../context";

const contextValues = {
  analyseFile: jest.fn(),
};

describe("Navbar component", () => {
  beforeEach(() => {
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    // Arrange
    expect.assertions(2)

    // Act
    render(<Navbar />);

    const navbar = screen.getByTestId("navbar");
    const navlist = screen.getByTestId("navlist");

    // Assert
    expect(navbar).toBeVisible();
    expect(navlist).toBeVisible();
  });

  it("navigates when clicked on home link correctly", async () => {
    // Arrange
    expect.assertions(1)

    // Act
    render(<Navbar />);

    const link = screen.getByTestId("home-link");
    await userEvent.click(link);

    // Assert
    expect(window.location.pathname).toBe("/");
  });

  
  it("calls anayseFile when clicked on analyse file link", async () => {
    // Arrange
    expect.assertions(1)

    // Act
    render(<Navbar />);
    
    const link = screen.getByTestId("analyze-link");
    await userEvent.click(link);

    // Assert
    expect(contextValues.analyseFile).toHaveBeenCalledTimes(1);
  });
});
