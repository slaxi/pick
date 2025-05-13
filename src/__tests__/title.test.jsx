const { render, screen } = require("@testing-library/react");
import Title from "../components/title/Title";

describe("Title component", () => {
  it("should be in the document", () => {
    render(<Title title="Heading" heading="h1" />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should should be the correct heading level based on passed prop for heading level", () => {
    render(<Title title="Heading" heading="h2" />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it("should accept proper class name", () => {
    render(<Title title="Heading" heading="h2" className="title" />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveClass("title");
  });

  it("should accept proper style for font size", () => {
    render(<Title title="Heading" heading="h2" fontSize="18" />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveStyle({ "font-size": "1.5em" });
  });

  it("should accept and display children", () => {
    const Text = () => <p>Some text</p>;
    render(
      <Title title="Heading" heading="h2" fontSize="18">
        <Text />
      </Title>
    );

    const textParagraph = screen.getByTestId("title-component");

    expect(textParagraph).toBeInTheDocument();
  });
  
  it("should display proper children content", () => {
    const Text = () => <p>Some text</p>;
    render(
      <Title title="Heading" heading="h2" fontSize="18">
        <Text />
      </Title>
    );

    const textParagraph = screen.getByTestId("title-component");

    expect(textParagraph).toHaveTextContent("Some text");
  });
});
