export interface LineConfig {
  text: string;
  highlight: string[];
  highlightColor: string;
  example: string;
  translation: string;
}

export const videoConfig = {
  fps: 30,
  durationPerLine: 150,
  introductionDuration: 150,
  width: 1080,
  height: 1920,
  backgroundColor: "#1a1a1a",
  textColor: "#ffffff",
  fontSize: 48,
  lineHeight: 2,
  subTextFontSize: 36,
  subTextColor: "#888",
};

export const textLines: LineConfig[] = [
  {
    text: "essential: 必要的，重要的",
    highlight: ["essential"],
    highlightColor: "#FFD700",
    example: "Water is essential for life.",
    translation: "水是生命必需的。",
  },
  {
    text: "improve: 提高，改善",
    highlight: ["improve"],
    highlightColor: "#FFD700",
    example: "I want to improve my English skills.",
    translation: "我想提高我的英语技能。",
  },
  {
    text: "efficient: 高效的",
    highlight: ["efficient"],
    highlightColor: "#FFD700",
    example: "She is very efficient at her job.",
    translation: "她工作效率很高。",
  },
];
