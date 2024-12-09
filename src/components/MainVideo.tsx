import { AbsoluteFill, Sequence } from "remotion";
import { TextLine } from "./TextLine";
import { textLines, videoConfig } from "../config";
import styled from "styled-components";

const Container = styled(AbsoluteFill)`
  background-color: ${videoConfig.backgroundColor};
  padding: 100px;
`;

const LineContainer = styled.div<{ index: number }>`
  position: absolute;
  top: ${(props) =>
    100 + props.index * (videoConfig.fontSize * videoConfig.lineHeight + 20)}px;
  left: 100px;
  right: 100px;
`;

const ExplanationContainer = styled.div`
  position: absolute;
  bottom: 650px;
  left: 100px;
  right: 100px;
  color: ${videoConfig.textColor};
  font-size: ${videoConfig.fontSize * 1.5}px;
  text-align: center;
`;

export const MainVideo: React.FC = () => {
  const totalDuration = textLines.length * videoConfig.durationPerLine;

  return (
    <Container>
      {textLines.map((line, index) => (
        <LineContainer key={index} index={index}>
          <Sequence
            from={index * videoConfig.durationPerLine}
            durationInFrames={
              totalDuration - index * videoConfig.durationPerLine
            }
          >
            <TextLine {...line} />
          </Sequence>
        </LineContainer>
      ))}
      <ExplanationContainer>
        {textLines.map((line, index) => (
          <Sequence
            key={index}
            from={index * videoConfig.durationPerLine}
            durationInFrames={videoConfig.durationPerLine}
          >
            {line.explanation}
          </Sequence>
        ))}
      </ExplanationContainer>
    </Container>
  );
};
