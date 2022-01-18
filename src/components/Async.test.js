import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request was successful", async () => {
    //Creating Mock or Dummie Data
    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    //Arrange
    render(<Async />);

    //Assert
    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).not.toHaveLength(0);
  });
});
