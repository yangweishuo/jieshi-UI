# 戒视（JieShiUI）- 安装与运行指南

本文档提供详细的项目安装、配置和运行步骤，帮助开发者快速搭建并运行戒视UI原型。

## 系统要求

- 现代浏览器（Chrome、Firefox、Edge等最新版本）
- 本地Web服务器（可选，用于避免跨域问题）

## 基础安装

### 方法一：直接下载

1. 点击仓库页面的"Code"按钮，选择"Download ZIP"
2. 解压下载的ZIP文件到本地目录
3. 使用浏览器打开`index.html`文件即可浏览项目

### 方法二：使用Git克隆

```bash
# 克隆仓库
git clone https://github.com/yourusername/jeshi-ui.git

# 进入项目目录
cd jeshi-ui
```

## 使用本地服务器运行（推荐）

为了获得最佳体验，特别是使用Three.js的3D功能，建议使用本地Web服务器运行项目。

### 使用Node.js的http-server

1. 确保已安装Node.js（https://nodejs.org/）
2. 全局安装http-server：

```bash
npm install -g http-server
```

3. 在项目根目录运行服务器：

```bash
http-server -p 8080
```

4. 在浏览器中访问 `http://localhost:8080`

### 使用Python的SimpleHTTPServer

1. 确保已安装Python（https://www.python.org/）
2. 在项目根目录运行以下命令：

Python 2.x:
```bash
python -m SimpleHTTPServer 8000
```

Python 3.x:
```bash
python -m http.server 8000
```

3. 在浏览器中访问 `http://localhost:8000`

### 使用Visual Studio Code的Live Server扩展

1. 在VS Code中安装"Live Server"扩展
2. 右键点击`index.html`文件，选择"Open with Live Server"
3. 浏览器将自动打开项目

## 配置说明

项目是纯前端UI原型，不需要复杂配置。但如果你想调整某些参数，可以修改以下文件：

- `script.js`: 修改全局JavaScript配置和功能
- `style.css`: 调整全局样式和主题
- 各HTML文件中的内联样式: 调整特定页面的样式

## 项目结构说明

```
├── index.html            # 项目预览入口页
├── login.html            # 登录/注册页面
├── home.html             # 应用首页
├── statistics.html       # 数据统计与分析页面
├── medal-wall.html       # 3D勋章墙页面
├── profile.html          # 个人中心页面
└── ... 其他页面和资源
```

### 核心页面说明

1. **首页 (home.html)**
   - 应用主界面，提供功能导航
   - 实现用户每日戒断目标和时间统计

2. **统计页面 (statistics.html)**
   - 数据可视化展示
   - 使用Chart.js实现多种图表

3. **3D勋章墙 (medal-wall.html)**
   - 使用Three.js实现3D交互效果
   - 可能需要更强的硬件支持

## 开发者注意事项

1. **Three.js兼容性**
   - 3D勋章墙需要WebGL支持
   - 部分低端设备可能会自动降级至2D模式

2. **响应式设计**
   - 项目已实现基本的移动端适配
   - 最佳体验屏幕宽度为375px（iPhone尺寸）

3. **浏览器兼容性**
   - 建议使用Chrome或Firefox最新版本测试
   - Safari浏览器上部分CSS效果可能有差异

## 常见问题解决

### 3D勋章墙无法显示

问题：打开medal-wall.html页面，但只显示加载画面或黑屏。

解决方法：
1. 确认浏览器支持WebGL（访问 https://get.webgl.org/ 测试）
2. 更新图形驱动程序
3. 使用本地服务器运行项目（参见上方说明）
4. 点击右下角的2D模式切换按钮，切换到兼容模式

### 页面样式错乱

问题：某些页面样式显示不正确。

解决方法：
1. 确保已加载所有CSS文件
2. 清除浏览器缓存
3. 检查是否使用了最新版本的浏览器

## 贡献代码

如果您想为项目贡献代码：

1. Fork此仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建一个Pull Request

---

如有其他问题，请提交Issue或联系项目维护者。 