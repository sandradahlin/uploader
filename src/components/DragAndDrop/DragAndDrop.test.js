import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as AppContext from "../../context";
import DragAndDrop from "./DragAndDrop";

const contextValues = {
  addFile: jest.fn(),
  currentFile: null,
  setLoading: jest.fn(),
};
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("DragAndDrop component", () => {
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
    expect.assertions(1);
    // Act

    render(<DragAndDrop />);
    const container = screen.getByTestId("dragAndDrop-container");
    // Assert

    expect(container).toBeVisible();
  });

  it("uploads file correctly", async () => {
    // Arrange
    expect.assertions(3);

    render(<DragAndDrop />);
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    // Act
    const input = screen.getByTestId("input-upload");
    File.prototype.text = jest.fn().mockResolvedValueOnce("test-file");
    userEvent.upload(input, file);

    // Assert
    expect(input.files[0].name).toBe("foo.txt");
    expect(input.files.length).toBe(1);
    expect(contextValues.setLoading).toHaveBeenCalledTimes(1);
  });

  it("calls setLoading on upload file", async () => {
    // Arrange
    expect.assertions(1);

    render(<DragAndDrop />);
    const file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    // Act
    const input = screen.getByTestId("input-upload");
    File.prototype.text = jest.fn().mockResolvedValueOnce("test-file");
    userEvent.upload(input, file);

    // Assert

    expect(contextValues.setLoading).toHaveBeenCalledTimes(1);
  });
});
