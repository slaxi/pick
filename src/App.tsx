import React from "react";
import Title from "./components/title/Title";
import Text from "./components/text/Text";
import Input from "./components/input/Input";
import VideoWrapper from "./components/video/video-wrapper/VideoWrapper";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Title
        heading="h1"
        className="text-4xl font-bold text-blue-500"
        fontSize={48}
      >
        {" "}
        Hello, Tailwind CSS!
      </Title>
      <Text
        fontSize={20}
        className="font-serif text-lg text-gray-800 text-center"
      >
        I'm a serif paragraph.
      </Text>
      <Input props={{ className: "grow", inputValue: "tresnja" }} />
      <main>
        <VideoWrapper />
      </main>
    </div>
  );
}

export default App;

