import "./tailwind.css";
import { Composition } from "remotion";
import { MainVideo } from "./components/MainVideo";
import { textLines, videoConfig } from "./config";

export const RemotionRoot: React.FC = () => {
  const mainContentDuration = textLines.length * videoConfig.durationPerLine;
  const totalDuration =
    mainContentDuration + videoConfig.introductionDuration * 2;

  return (
    <>
      <Composition
        id="MainVideo"
        component={MainVideo}
        durationInFrames={totalDuration}
        fps={videoConfig.fps}
        width={videoConfig.width}
        height={videoConfig.height}
      />
    </>
  );
};
