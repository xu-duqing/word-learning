import { spring, useCurrentFrame } from "remotion";
import styled from "styled-components";
import { videoConfig } from "../config";

interface TextLineProps {
  text: string;
  highlight: string[];
  highlightColor: string;
  example: string;
  translation: string;
}

const LineWrapper = styled.div<{ opacity: number }>`
  font-size: ${videoConfig.fontSize * 1.2}px;
  color: ${videoConfig.textColor};
  opacity: ${(props) => props.opacity};
  line-height: ${videoConfig.lineHeight * 0.8};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MainText = styled.div`
  margin-bottom: 8px;
`;

const SubText = styled.div`
  font-size: ${videoConfig.subTextFontSize}px;
  color: ${videoConfig.subTextColor};
`;

const HighlightSpan = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const TextLine: React.FC<TextLineProps> = ({
  text,
  highlight,
  highlightColor,
  example,
  translation,
}) => {
  const frame = useCurrentFrame();

  const opacity = spring({
    frame,
    fps: videoConfig.fps,
    from: 0,
    to: 1,
    durationInFrames: 30,
  });

  const renderText = () => {
    let result = text;
    highlight.forEach((word) => {
      result = result.replace(word, `<highlight>${word}</highlight>`);
    });

    return result.split(/(<highlight>.*?<\/highlight>)/).map((part, index) => {
      if (part.startsWith("<highlight>")) {
        const word = part.replace(/<\/?highlight>/g, "");
        return (
          <HighlightSpan key={index} color={highlightColor}>
            {word}
          </HighlightSpan>
        );
      }
      return part;
    });
  };

  return (
    <LineWrapper opacity={opacity}>
      <MainText>{renderText()}</MainText>
      <SubText>例句: {example}</SubText>
      <SubText>翻译: {translation}</SubText>
    </LineWrapper>
  );
};
