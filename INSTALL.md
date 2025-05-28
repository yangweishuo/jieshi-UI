# 戒视应用（JieShiUI）安装指南

本文档提供了戒视应用UI原型的安装和配置说明。

## 系统要求

- 现代浏览器（Chrome 90+、Firefox 90+、Safari 14+、Edge 90+）
- 支持JavaScript和本地存储
- 建议使用移动设备或启用移动设备模拟模式访问
- WebGL支持（用于3D勋章墙功能，不支持时会降级为2D模式）

## 快速开始

### 方法一：本地运行

1. 克隆或下载项目到本地：
   ```
   git clone https://github.com/yourusername/jieshi-ui.git
   ```

2. 进入项目目录：
   ```
   cd jieshi-ui
   ```

3. 使用本地服务器运行项目（任选一种）：

   - 使用Python内置服务器：
     ```
     # Python 3.x
     python -m http.server 8000
     ```

   - 使用Node.js：
     ```
     # 安装http-server
     npm install -g http-server
     # 运行服务
     http-server -p 8000
     ```

4. 在浏览器中访问：
   ```
   http://localhost:8000
   ```

5. 在浏览器的开发者工具中启用移动设备模拟（推荐）：
   - Chrome/Edge: F12 -> 切换设备工具栏（或Ctrl+Shift+M）
   - Firefox: F12 -> 响应式设计模式（或Ctrl+Shift+M）

### 方法二：在线预览

您可以直接访问在线部署版本：
```
https://jieshi-ui.example.com
```
（注：这是示例链接，请替换为实际部署地址）

## 功能预览

安装完成后，您可以通过首页（index.html）导航至不同功能页面：

1. **首页与数据统计**
   - 首页（home.html）：查看主要功能入口和当日概览
   - 数据统计（statistics.html）：查看使用习惯分析和改进趋势

2. **AI助手系统**
   - AI助手（ai.html）：与智能助手交互获取建议
   - AI分析报告（ai-analysis.html）：查看详细的使用模式分析

3. **社区与社交功能**
   - 社交圈（social.html）：查看朋友动态和互动消息
   - 社区主页（community.html）：浏览社区内容，参与交流讨论
   - 文章详情（community-article.html）：阅读完整文章内容
   - 视频详情（community-video.html）：观看视频内容

4. **个人中心与设置**
   - 个人中心（profile.html）：管理个人资料和成就
   - 账户安全（account-security.html）：修改密码和隐私设置
   - 创作中心（creation-center.html）：管理创作内容和粉丝互动

5. **成就系统**
   - 3D勋章墙（medal-wall.html）：查看获得的勋章和成就
   - 勋章详情（badges.html）：了解各勋章的获取条件和意义
   - 排行榜（ranking.html）：查看用户排名和成就对比

6. **家庭互助**
   - 家庭中心（family.html）：管理家庭成员和互助活动
   - 家庭消息（family-messages.html）：家庭成员间的互动通讯

## 注意事项

1. **本地存储**
   - 项目使用localStorage模拟数据存储，清除浏览器缓存会重置应用状态
   - 首次使用时会自动创建演示数据

2. **WebGL支持**
   - 3D勋章墙功能需要WebGL支持
   - 在不支持WebGL的设备上会自动降级为2D展示模式

3. **移动端体验**
   - 界面设计主要针对移动设备优化
   - 在桌面浏览器中使用时建议启用移动设备模拟

4. **新增功能**
   - 社区功能：在最新版本中，我们完善了社区相关页面，添加了社区主页、文章详情页和视频详情页
   - 创作中心：新增了创作中心页面，支持内容创作和管理
   - 社交圈社区集成：实现了社交圈与社区的无缝连接，添加了热角标提示

## 常见问题

### 页面显示不正常？

- 确保使用最新版本的浏览器
- 尝试清除浏览器缓存后重新加载
- 检查是否启用了JavaScript

### 3D勋章墙无法显示？

- 确认您的设备支持WebGL
- 在浏览器设置中启用硬件加速
- 使用降级模式查看2D版本

### 如何测试不同功能？

- 登录页面提供了测试账号（用户名：test，密码：123456）
- 可以使用此账号体验所有功能模块

### 页面加载缓慢？

- 检查网络连接
- 3D功能可能在低端设备上性能较差，可切换到2D模式
- 图片资源较多，首次加载可能需要较长时间

## 联系与支持

如遇到安装或使用问题，请通过以下方式获取支持：

- 项目仓库Issue区：[GitHub Issues](https://github.com/yourusername/jieshi-ui/issues)
- 电子邮件：support@jieshi-app.example.com

---

感谢您使用戒视应用UI原型！本项目仅展示界面设计和交互，实际功能需要后端支持。

*文档最后更新于2025年3月15日* 