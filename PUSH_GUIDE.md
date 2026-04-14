# 推送指南

由于需要GitHub认证，无法直接在环境中完成推送。请按照以下步骤在本地完成推送：

1. **克隆仓库**：
   ```bash
   git clone https://github.com/Leoqq41/my-site.git
   ```

2. **进入目录**：
   ```bash
   cd my-site
   ```

3. **添加文件**：
   ```bash
   # 将您的项目文件复制到这里
   ```

4. **提交更改**：
   ```bash
   git add .
   git commit -m "Add project files"
   ```

5. **推送到GitHub**：
   ```bash
   git push origin master
   ```

或者，如果您已经有项目文件，可以按照以下步骤操作：

1. **初始化git**：
   ```bash
   cd your-project-directory
   git init
   git config user.name "Leoqq41"
   git config user.email "your-email@example.com"
   ```

2. **添加远程仓库**：
   ```bash
   git remote add origin https://github.com/Leoqq41/my-site.git
   ```

3. **提交并推送**：
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin master
   ```
