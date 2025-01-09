# Nova

基于 Dify 的新一代 AI 对话助手，提供简单易用的对话式 AI 服务。

## 🌟 特性

- 🤖 多模型支持：集成多种 AI 模型，灵活切换
- 💬 智能对话：自然的对话体验，上下文理解
- 🎨 美观界面：响应式设计，支持移动端
- 🚀 易于部署：提供 Docker 容器化部署
- 🛡️ 安全可靠：基础的用户认证和错误处理

## 🚀 快速开始

### 环境要求

- Node.js 16+
- Python 3.8+
- Docker & Docker Compose

### 本地开发

1. 克隆项目
```bash
git clone https://github.com/lebonheurbb/nova.git
cd nova
```

2. 安装依赖
```bash
# 前端依赖
cd web-ui
npm install

# 后端依赖
cd ../dify-core/api
pip install -r requirements.txt
```

3. 启动服务
```bash
# 使用 Docker Compose 启动
docker-compose up -d
```

4. 访问服务
- Web 界面：http://localhost:3000
- API 服务：http://localhost:5001

## 📚 文档

- [版本说明](VERSION.md)
- [架构设计](architecture.md)
- [开发指南](DEVELOPMENT.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)
