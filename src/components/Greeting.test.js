import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Assert
    const text = screen.getByText("Hello World!");

    expect(text).toBeInTheDocument();
  });

  test("renders It's good to see you! as a text if the button was not clicked", () => {
    //Arrange
    render(<Greeting />);

    //Assert
    const text = screen.getByText("good to see you!", { exact: false });

    expect(text).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");

    userEvent.click(button);

    //Assert
    const text = screen.getByText("Changed", { exact: false });

    expect(text).toBeInTheDocument();
  });

  test("Does not rendered It's good to see you! if the button was clicked ", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");

    userEvent.click(button);

    //Assert
    const text = screen.queryByText("good to see you!", { exact: false });

    expect(text).toBeNull();
  });
});
