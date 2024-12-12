export interface LineConfig {
  text: string;
  highlight: string[];
  highlightColor: string;
  example: string;
  translation: string;
}

export const videoConfig = {
  fps: 30,
  durationPerLine: 300 * 0.8,
  introductionDuration: 300,
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
    text: "achieve: 实现，达到",
    highlight: ["achieve"],
    highlightColor: "#FFD700",
    example: "You can achieve your goals with hard work.",
    translation: "通过努力你可以实现自己的目标。",
  },
  {
    text: "challenge: 挑战，盘问",
    highlight: ["challenge"],
    highlightColor: "#FFD700",
    example: "This project is a big challenge for me.",
    translation: "这个项目对我来说是一个很大的挑战。",
  },
  {
    text: "support: 支持，帮助",
    highlight: ["support"],
    highlightColor: "#FFD700",
    example: "I appreciate your support.",
    translation: "我很感激你的支持。",
  },
];
