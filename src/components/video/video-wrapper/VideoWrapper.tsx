// import React from "react";
// import Video from "../video/Video";
// import Title from "../../title/Title";
// import VideoOverlay from "../video-overlay/VideoOverlay";
// import Text from "../../text/Text";
// import "../../video/Video.css";

// type TVideoWrapper = React.ComponentProps<typeof Video> & {
//   children?: React.ReactNode;
// };

// const VideoWrapper: React.FC<TVideoWrapper> = ({ children, ...props }) => {
//   console.log("DJOKA:", props);
//   return (
//     <>
//       {children}
//       <Video {...props}>
//         <VideoOverlay />
//         <Title heading="h2" fontSize={64} className="video_heading font-sans">
//           This is the heading
//           <Text className="text-white-800 font-sans font-thin" fontSize={18}>
//             <span>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
//               blanditiis odio!
//             </span>
//           </Text>
//         </Title>
//       </Video>
//     </>
//   );
// };

// export default VideoWrapper;

import React from "react";
import Video from "../video/Video";
import Title from "../../title/Title";
import VideoOverlay from "../video-overlay/VideoOverlay";
import Text from "../../text/Text";
import "../../video/Video.css";

// Nasleđivanje propova iz Video komponente
type TVideoWrapper = React.ComponentProps<typeof Video> & {
  children?: React.ReactNode;
};

const VideoWrapper: React.FC<TVideoWrapper> = ({ children, ...props }) => {
  return (
    <>
      {children}
      <Video {...props}>
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
