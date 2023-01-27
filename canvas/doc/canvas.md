# Canvas

## 1 基本概念

### 1.1 什么是 Canvas

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)中的定义：canvas 是一个可以使用脚本 (通常为JavaScript) 来绘制图形的 HTML 元素。

### 1.2 Canvas 用来解决什么问题

相对于 img 标签只能显示静态图片，canvas 标签提供了一个画布，可由JS脚本绘制可交互的图形及动画。

### 1.3 Canvas 用途

它可以用于绘制图表、制作图片构图或者制作简单的动画以及处理视频。

### 1.4 常见的库

* [Echarts](https://echarts.apache.org/zh/index.html) 一个基于 JavaScript 的开源可视化图表库
* [EaselJS](https://createjs.com/easeljs) 使制作游戏、创作类艺术和其他侧重图形项目更容易的开源 canvas 库
* [Fabric.js](http://fabricjs.com/) 具有 SVG 解析功能的开源 canvas 库
* [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) 基于 canvas 的热点图的开源库
* [Konva.js](https://konvajs.org/) 用于桌面端和移动端应用的 2D canvas 库
* [p5.js](https://p5js.org/) 包含给艺术家、设计师、教育者、初学者使用的完整的 canvas 绘制功能
* [Paper.js](http://paperjs.org/) 运行于 HTML5 Canvas 上的开源矢量图形脚本框架
* [Phaser](https://phaser.io/) 用于基于 Canvas 和 WebGL 的浏览器尤其的快速、自由、有趣的开源框架
* [Pts.js](https://ptsjs.org/) 在 canvas 和 SVG 中进行创意性代码写作和可视化的库
* [Rekapi](https://github.com/jeremyckahn/rekapi) 关键帧动画库
* [Scrawl-canvas](https://scrawl.rikweb.org.uk/) 用来创建和编辑 2D 图形的开源库
* [ZIM框架](https://zimjs.com/) 为 canvas 上的代码创意性提供方便性、组件和可控性，包括可用性和数百个色彩缤纷的教程

### 1.5 Canvas vs SVG


|        | 优点                                                                                                     | 缺点                                                      | 适用场景                         |
| -------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------- |
| Canvas | 大数据量渲染性能更好；利于实现一些视觉特效                                                               | Canvas重绘会重绘整个画布                                  | 数据量较大（大于1k）、较多交互时 |
| SVG    | SVG支持分层和事件，重绘时，svg会重绘一部分；内存占用更低（更适用于移动端）；生成的是矢量图，缩放不会失真 | SVG图片是由很多节点构成的，在渲染时节点过多会降低渲染性能 | 内存紧张时                       |

在软硬件环境较好，数据量不大的场景下，两种渲染器都可以适用，并不需要太多纠结。
