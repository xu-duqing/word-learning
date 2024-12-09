export interface LineConfig {
  text: string;
  highlight: string[];
  highlightColor: string;
  explanation: string;
}

export const videoConfig = {
  fps: 30,
  durationPerLine: 150, // 每行持续150帧
  width: 1080, // 适配手机竖屏宽度
  height: 1920, // 适配手机竖屏高度
  backgroundColor: "#1a1a1a",
  textColor: "#ffffff",
  fontSize: 48,
  lineHeight: 2,
};

export const textLines: LineConfig[] = [
  {
    text: "pose: 放置、摆放",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Pose 意思是放置或摆放。词根 'pose' 来自拉丁语 'ponere'，意思是 '放置'。",
  },
  {
    text: "expose: 使暴露、揭露",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Expose 意思是使暴露或揭露。词根 'pose' 来自拉丁语 'ponere'，前缀 'ex-' 意思是 '向外'。",
  },
  {
    text: "impose: 强加、施加",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Impose 意思是强加或施加。词根 'pose' 来自拉丁语 'ponere'，前缀 'im-' 意思是 '进入或在上'。",
  },
  {
    text: "compose: 组成、创作",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Compose 意思是组成或创作。词根 'pose' 来自拉丁语 'ponere'，前缀 'com-' 意思是 '一起'。",
  },
  {
    text: "depose: 罢免、废黜",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Depose 意思是罢免或废黜。词根 'pose' 来自拉丁语 'ponere'，前缀 'de-' 意思是 '向下或除去'。",
  },
  {
    text: "propose: 提议、建议",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Propose 意思是提议或建议。词根 'pose' 来自拉丁语 'ponere'，前缀 'pro-' 意思是 '向前'。",
  },
  {
    text: "oppose: 反对、抵制",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Oppose 意思是反对或抵制。词根 'pose' 来自拉丁语 'ponere'，前缀 'op-' 意思是 '反对或相对'。",
  },
  {
    text: "dispose: 处理、处置",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Dispose 意思是处理或处置。词根 'pose' 来自拉丁语 'ponere'，前缀 'dis-' 意思是 '分开或除去'。",
  },
  {
    text: "repose: 休息、安宁",
    highlight: ["pose"],
    highlightColor: "#FFD700",
    explanation:
      "Repose 意思是休息或安宁。词根 'pose' 来自拉丁语 'ponere'，前缀 're-' 意思是 '再次或回到'。",
  },
];
