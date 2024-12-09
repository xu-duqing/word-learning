这是一个 remotion 程序
你是一个经验丰富的 UI 设计师,风格简洁
你已经在 remotion 项目中,因此不需要生成新的项目
我需要你实现以下需求:

## 需求设计

功能需求
内容逐行显示：

每一行文字按时间顺序逐步显示。
行与行之间有轻微的过渡效果（如淡入）。
支持多种样式：

特定关键词或文本可以高亮（如图片中黄色关键词）。
背景色和字体颜色可定制。
动画效果：

淡入淡出效果用于显示或隐藏文本。
背景和文字的样式变化（如关键词高亮动画）。
可配置内容：

视频的文字内容可以从一个 JSON 文件中加载。
自定义播放控制：

可以设置每一行显示的时间间隔和持续时间。

## 实现步骤

### JSON 配置文件：

创建一个包含视频文字内容的 JSON 文件，例如：
json
复制代码
[
{
"text": "pose: 放置、摆放",
"highlight": ["pose"],
"highlightColor": "#FFD700"
},
{
"text": "expose: 使暴露、揭露",
"highlight": ["expose"],
"highlightColor": "#FFD700"
}
]

### 文字渲染组件：

编写一个 React 组件 TextLine，渲染单行文字，并支持：
高亮关键词。
动画效果（如淡入）。
主视频组件：

使用 Sequence 将每一行内容按时间顺序显示。
例如：
tsx
复制代码
import { Sequence } from 'remotion';

const MyVideo: React.FC = () => {
const lines = [
{ text: "pose: 放置、摆放", highlight: ["pose"], highlightColor: "#FFD700" },
{ text: "expose: 使暴露、揭露", highlight: ["expose"], highlightColor: "#FFD700" }
];

return (
<Composition id="Main" component={MyVideo} durationInFrames={150 _ lines.length} width={1920} height={1080}>
{lines.map((line, index) => (
<Sequence from={index _ 150} durationInFrames={150}>
<TextLine {...line} />
</Sequence>
))}
</Composition>
);
};

### 样式和动画：

使用 keyframes 和 spring 为文字添加动态效果。
