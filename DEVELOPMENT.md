# 开发指南

## 开发环境设置

1. 启动开发环境
```bash
# 启动所有服务
docker-compose -f docker-compose.dev.yml up

# 访问地址
- 网页端: http://localhost:3000
- API文档: http://localhost:4000/docs
- Dify管理界面: http://localhost:5000
```

## 测试流程

### 1. 本地测试
- 网页端测试：
  - 打开 http://localhost:3000
  - 使用 Chrome 开发者工具进行响应式测试
  - 使用 React 开发工具检查组件

- API测试：
  - 使用 Postman 或 Swagger UI 测试 API
  - 检查请求/响应是否符合预期
  - 验证错误处理

### 2. iOS App 测试
- 使用 Xcode 模拟器测试
- TestFlight 内部测试
- 真机调试

## 部署流程

### 1. 网页端部署
- 构建生产版本：
  ```bash
  cd web-ui
  npm run build
  ```
- 部署到服务器或云平台（如 Vercel、Netlify）

### 2. iOS App 发布
1. 准备应用上架材料
2. 通过 TestFlight 进行内部测试
3. 提交 App Store 审核

## 常见问题解决

### 1. 开发环境问题
- 端口冲突：修改 docker-compose.dev.yml 中的端口映射
- 依赖安装失败：检查 package.json 版本兼容性

### 2. 调试技巧
- 使用 Chrome DevTools 调试网页
- 使用 Xcode 调试工具调试 iOS App
- 使用 MongoDB Compass 查看数据

### 3. 性能优化
- 使用 React DevTools 分析性能
- 使用 Lighthouse 测试网页性能
- 使用 Instruments 分析 iOS App 性能
