# Wang Jin Portfolio

汪金个人作品集网站，基于 React + Vite 构建，定位为精益工程师 / IE 工程师 / 制造现场改善与质量管理方向的个人展示站。

## Tech Stack

- React 19
- Vite 6
- GSAP + ScrollTrigger
- lucide-react
- CSS animation

## Local Development

```bash
npm install
npm run dev
```

默认本地地址：

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

构建产物输出到：

```text
dist/
```

## Deploy

适合部署到 Vercel、腾讯云 CloudBase 静态网站托管或腾讯云 COS + CDN。

Vercel / CloudBase 常用配置：

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

## Project Structure

```text
src/
  main.jsx
  styles.css
public/
  favicon.svg
  assets/
index.html
package.json
package-lock.json
```

## Notes

- 项目为纯前端静态站，不需要后端服务。
- 图片资源已转换为 WebP，以降低首屏和滚动加载压力。
- WebGL 动态背景已移除，当前使用 CSS 深蓝工业科技风背景，兼顾稳定性与性能。
