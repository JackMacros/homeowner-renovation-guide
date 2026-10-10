# 部署说明

本项目构建后是纯静态网站，不需要常驻 Node.js 服务，也不需要 Nginx 反向代理。生产环境由 Nginx 直接读取 `build/` 目录即可。

> 上线前务必用真实域名设置 `SITE_URL` 后重新构建，否则 canonical、分享卡片和 sitemap 会保留本地默认的 `example.com`。

## 1. 构建环境

- Node.js 20 或更高版本
- npm 10 或更高版本

首次部署或依赖有变化时：

```bash
npm ci
SITE_URL=https://guide.example.com BASE_URL=/ npm run build
```

将 `https://guide.example.com` 换成实际域名。构建结果位于 `build/`。

PowerShell 写法：

```powershell
$env:SITE_URL = 'https://guide.example.com'
$env:BASE_URL = '/'
npm run build
```

## 2. 发布目录

推荐把 `build/` 中的全部文件同步到：

```text
/var/www/renovation-guide/
```

每次更新内容后重新执行构建，再用 `rsync` 或其他发布工具覆盖该目录。不要把 `node_modules/` 上传到服务器。

## 3. Nginx 配置

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name guide.example.com;

    root /var/www/renovation-guide;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    location /assets/ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location = /sitemap.xml {
        try_files $uri =404;
        expires 1h;
    }
}
```

启用 HTTPS 时继续使用现有证书配置即可。修改后先检查配置，再平滑重载 Nginx：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 4. 部署在子路径

如果访问地址是 `https://example.com/zhuangxiu/`，构建时必须设置：

```bash
SITE_URL=https://example.com BASE_URL=/zhuangxiu/ npm run build
```

同时把构建结果放到 Nginx 站点根目录下的 `zhuangxiu/` 目录。`BASE_URL` 必须以 `/` 开头和结尾。

## 5. 上线检查

- 首页、施工流程、现场清单、专题和模板均可打开；
- 直接访问某一篇文章的 URL，刷新后仍能打开；
- 搜索框能检索到中文标题和正文；
- 手机宽度下导航、表格和阶段流程可正常阅读；
- `https://实际域名/sitemap.xml` 可以访问；
- 浏览器控制台没有 404 或脚本错误。

## 6. 日常更新

只修改 Markdown 时，仍需重新运行 `npm run build` 并发布新的 `build/`。本地预览可使用：

```bash
npm run start
```

生产构建完成后可用以下命令复查最终产物：

```bash
npm run serve
```

## 7. 构建安全边界

Node.js 和 npm 依赖只用于本地或 CI 构建，线上 Nginx 只发布 `build/`，不运行这些依赖。Markdown/MDX 应仅接受自己或可信维护者提交的内容，不要搭建允许陌生人直接提交并自动构建 MDX 的入口。

