import { render, screen } from "@testing-library/react";
import * as AppContext from "../../context";
import SplashScreen from "./SplashScreen";

const contextValues = {
  loading: true,
};

describe("SplashScreen component", () => {
  beforeEach(() => {
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("renders without error", () => {
    // Arrange
    expect.assertions(1)

    // Act
    render(<SplashScreen/>)
    
    const loader = screen.getAllByTestId('loader')

    // Asseert
    expect(loader.length).toBe(1);
  });
});
