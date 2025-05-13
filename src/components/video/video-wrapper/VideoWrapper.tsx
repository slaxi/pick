import React from "react";
import Video from "../video/Video";
import Title from "../../title/Title";
import VideoOverlay from "../video-overlay/VideoOverlay";
import Text from "../../text/Text";
import '../Video.css'

const VideoWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {children}
      <Video
        src="https://cdn.pixabay.com/video/2025/04/10/271161_tiny.mp4"
        className="video_fullscreen"
      >
        <VideoOverlay />
        <Title heading="h2" fontSize={64} className="video_heading font-sans">
          This is the heading
          <Text className="text-white-800 font-sans font-thin" fontSize={18}>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
              blanditiis odio!
            </span>
          </Text>
        </Title>
      </Video>
    </>
  );
};

export default VideoWrapper;
