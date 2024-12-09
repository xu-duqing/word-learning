import "./tailwind.css";
import { Composition } from "remotion";
import { MainVideo } from "./components/MainVideo";
import { textLines, videoConfig } from "./config";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MainVideo"
        component={MainVideo}
        durationInFrames={textLines.length * videoConfig.durationPerLine}
        fps={videoConfig.fps}
        width={videoConfig.width}
        height={videoConfig.height}
      />
    </>
  );
};
