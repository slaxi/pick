import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render the heading title", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello, Tailwind CSS!')
  });

  it('should render the input field', () => {
    render(<App />)
    const input = screen.getByTestId('input-component')

    expect(input).toBeInTheDocument()
  })
});
