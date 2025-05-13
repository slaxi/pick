const { render, screen } = require("@testing-library/react");
import Video from "../components/video/video/Video";
import Title from "../components/title/Title";

describe("Video component", () => {
  /**
   * display properly on the page
   * accepting children
   * accepting props
   *
   */
  beforeEach(() => {
    const props = { className: "video_fullscreen" };
    render(
      <Video
        src="https://cdn.pixabay.com/video/2025/04/10/271161_tiny.mp4"
        id="hash_video"
        className="video_fullscreen"
      >
        <Title heading="h2">this is heading</Title>
      </Video>
    );
  });

  it("should display video component on the page", () => {
    const videoTag = screen.getByTestId("video-component");

    expect(videoTag).toBeInTheDocument();
  });

  it("should acept children with correct title", () => {
    const headingTitle = screen.getByRole("heading", { level: 2 });

    expect(headingTitle).toBeInTheDocument();
  });

  it("should acept children with correct title content", () => {
    const headingTitle = screen.getByRole("heading", { level: 2 });

    expect(headingTitle).toHaveTextContent("this is heading");
  });

  it("should have proper class name", () => {
    const videoTag = screen.getByTestId("video-component");

    expect(videoTag).toHaveClass("video_fullscreen");
  });

  it("should accept proper additional props", () => {
    const videoTag = screen.getByTestId("video-component");

    expect(videoTag).toHaveAttribute("id", "hash_video");
  });
});
