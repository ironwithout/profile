---
title: "Building a Portfolio Site with Astro"
description: "My experience building a fast, content-focused portfolio with Astro"
pubDate: 2026-01-04
tags: ["astro", "web-development", "tutorial"]
---

# Building a Portfolio Site with Astro

Recently, I rebuilt my portfolio site using [Astro](https://astro.build/), and it's been a fantastic experience.

## Why Astro?

Astro is perfect for content-focused sites because:

- **Zero JavaScript by default** - Ships minimal JS to the client
- **Fast builds** - Static site generation is lightning quick
- **Great DX** - Modern tooling and excellent documentation
- **Flexible** - Use React, Vue, or any framework when needed

## The Stack

For this project, I chose:

```bash
- Astro (Framework)
- Tailwind CSS (Styling)
- TypeScript (Type safety)
- Docker (Deployment)
- Nginx (Production server)
```

## Performance Results

The results speak for themselves:

- **Lighthouse score**: 100/100
- **First Contentful Paint**: < 0.5s
- **Total bundle size**: < 50KB

## Markdown Content

One of my favorite features is the built-in Markdown support. I can write blog posts like this one in Markdown, and Astro handles everything else.

## Deployment

Deploying with Docker is straightforward:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

## Conclusion

If you're building a content-heavy site and want great performance without complexity, give Astro a try!
