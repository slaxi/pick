import { render, screen } from "@testing-library/react";
import Text from "../components/text/Text";

describe("Text component", () => {
  beforeEach(() => {
    render(
      <Text className="underline" fontSize={20}>
        Some text <a href="#">Link</a>
      </Text>
    );
  });
  it("should be present on a page", () => {
    const textParagraph = screen.getByTestId("text-component");

    expect(textParagraph).toBeInTheDocument();
  });
  it("should have default class class", () => {
    const textParagraph = screen.getByTestId("text-component");

    expect(textParagraph).toHaveClass("font-sans");
  });
  it("should accept proper class", () => {
    const textParagraph = screen.getByTestId("text-component");

    expect(textParagraph).toHaveClass("underline");
  });
  it("should accept proper font size", () => {
    const textParagraph = screen.getByTestId("text-component");

    expect(textParagraph).toHaveStyle({ "font-size": "20px" });
  });
  it("should accept proper children passed to it", () => {
    const textParagraph = screen.getByTestId("text-component");

    expect(textParagraph).toHaveTextContent('Some text Link');
  });
  it("should have proper HTML structure of the children passed to it", () => {
    const textParagraph = screen.getByTestId("text-component");

    expect(textParagraph).toContainHTML('Some text <a href="#">Link</a>');
  });
});
