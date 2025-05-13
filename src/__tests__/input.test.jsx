import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../components/input/Input";
import { React} from "react";
import { vi } from "vitest";



vi.mock("../../hooks/useInput", async () => {
    const React = await import('react');
    return {
      __esModule: true,
      default: vi.fn(() => {
        const [value, setValue] = React.useState("text");
  
        return [
          {
            value,
            onChange: vi.fn((e) => setValue(e.target.value)),
            onFocus: vi.fn(() => setValue("")),
          },
          vi.fn(() => setValue("")),
        ];
      }),
    };
  });

describe("Input component display", () => {
  beforeEach(() => {
    render(<Input props={{ inputValue: "text" }} />);
    vi.clearAllMocks();
  });

  it("should display the component correctly", () => {
    const input = screen.getByPlaceholderText(/query/);

    expect(input).toBeInTheDocument();
  });

  it("should update the value of the input", () => {
    const input = screen.getByPlaceholderText(/query/);

    fireEvent.change(input, { target: { value: "text" } });

    expect(input.value).not.toBe("");
  });

  it("should update the value of the input with the proper value", () => {
    const input = screen.getByPlaceholderText(/query/);

    fireEvent.change(input, { target: { value: "dummy text" } })

    expect(input.value).toBe("dummy text");
  });

  it("should clear the value of the input on focus event", async () => {
    const input = await screen.findByPlaceholderText(/query/);

    fireEvent.focus(input);

    expect(input.value).toBe("");
  });
});

describe("Input component props", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should accept proper class", () => {
    const props = { className: "some_class" };
    render(<Input props={props} />);
    const input = screen.getByPlaceholderText(/query/);

    expect(input).toHaveClass("some_class");
  });

  it("should be disabled if passed as a prop", () => {
    const props = { disabled: true, inputValue: "text" };
    render(<Input props={props} />);
    const input = screen.getByPlaceholderText(/query/);

    expect(input).toBeDisabled();

    expect(input.value).toBe("text");
  });
});