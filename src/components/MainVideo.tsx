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
    100 +
    props.index * (videoConfig.fontSize * videoConfig.lineHeight + 180)}px;
  left: 100px;
  right: 100px;
`;

const IntroContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${videoConfig.textColor};
  font-size: ${videoConfig.fontSize}px;
  text-align: center;
  width: 80%;
`;

const IntroTitle = styled.h1`
  font-size: ${videoConfig.fontSize * 1.5}px;
  margin-bottom: 40px;
  color: ${videoConfig.textColor};
`;

const IntroWord = styled.div`
  margin: 20px 0;
  font-size: ${videoConfig.fontSize * 1.2}px;
`;

const WordHighlight = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const MainVideo: React.FC = () => {
  const mainContentDuration = textLines.length * videoConfig.durationPerLine;
  // const totalDuration =
  //   mainContentDuration + videoConfig.introductionDuration * 2;

  const WordList = () => (
    <IntroContainer>
      <IntroTitle>40秒无痛记单词:</IntroTitle>
      {textLines.map((line, index) => (
        <IntroWord key={index}>
          <WordHighlight color={line.highlightColor}>
            {line.highlight[0]}
          </WordHighlight>
          : {line.text.split(": ")[1]}
        </IntroWord>
      ))}
    </IntroContainer>
  );

  return (
    <Container>
      {/* 开场单词列表 */}
      <Sequence durationInFrames={videoConfig.introductionDuration}>
        <WordList />
      </Sequence>

      {/* 主要内容 */}
      <Sequence from={videoConfig.introductionDuration}>
        {textLines.map((line, index) => (
          <LineContainer key={index} index={index}>
            <Sequence
              from={index * videoConfig.durationPerLine}
              durationInFrames={
                mainContentDuration - index * videoConfig.durationPerLine
              }
            >
              <TextLine {...line} />
            </Sequence>
          </LineContainer>
        ))}
      </Sequence>

      {/* 结尾单词列表 */}
      <Sequence from={videoConfig.introductionDuration + mainContentDuration}>
        <WordList />
      </Sequence>
    </Container>
  );
};
