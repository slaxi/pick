import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { vi } from "vitest";

const mockOnFocus = vi.fn();
const mockChange = vi.fn();
const mockReset = vi.fn();

vi.mock("../../hooks/useInput", () => ({
  __esModule: true,
  default: vi.fn(() => [
    {
      value: "text",
      onChange: mockChange,
      onFocus: mockOnFocus,
    },
    mockReset,
  ]),
}));

describe("Button component", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })
  it("should clear the value of the input on focus event", () => {
    render(<Input props={{ inputValue: "text" }} />);
    const input = screen.getByPlaceholderText(/query/);

    fireEvent.focus(input);

    expect(mockOnFocus).toHaveBeenCalledTimes(1);
  });

  it("should invoke the onchange event if filling out the input field", () => {
    render(<Input props={{ inputValue: "text" }} />);
    const input = screen.getByPlaceholderText(/query/);

    fireEvent.change(input, {target: {value: 'new text'}});

    expect(mockChange).toHaveBeenCalledTimes(1);
  });

  it("should react on user interaction", () => {
    render(<Input props={{ inputValue: "text" }} />);
    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});

describe("Button props", () => {
    it('should accept title props properly', () => {
        const title = 'Submit'
        render(<Button title={title}/>)

        const btn = screen.getByText('Submit')

        expect(btn).toBeInTheDocument()
    })

    it('should be disabled if pass disabled as a prop', () => {
        const disabled = true
        render(<Button disabled={disabled}/>)

        const btn = screen.getByRole('button')

        expect(btn).toBeDisabled()
    })

    it('should have match class name passed as a prop', () => {
        render(<Button className='outline'/>)

        const btn = screen.getByRole('button')

        expect(btn).toHaveClass('outline')
    })
})

