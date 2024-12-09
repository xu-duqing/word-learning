import { spring, useCurrentFrame } from "remotion";
import styled from "styled-components";
import { videoConfig } from "../config";

interface TextLineProps {
  text: string;
  highlight: string[];
  highlightColor: string;
}

const LineWrapper = styled.div<{ opacity: number }>`
  font-size: ${videoConfig.fontSize * 1.2}px;
  color: ${videoConfig.textColor};
  opacity: ${(props) => props.opacity};
  line-height: ${videoConfig.lineHeight};
  transition: opacity 0.3s ease-in-out;
`;

const HighlightSpan = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const TextLine: React.FC<TextLineProps> = ({
  text,
  highlight,
  highlightColor,
}) => {
  const frame = useCurrentFrame();

  // 使用spring创建平滑的淡入效果
  const opacity = spring({
    frame,
    fps: videoConfig.fps,
    from: 0,
    to: 1,
    durationInFrames: 30,
  });

  // 处理文本高亮
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

  return <LineWrapper opacity={opacity}>{renderText()}</LineWrapper>;
};
