# Professional Profile Website

A lightweight, content-focused profile website built with Astro, Tailwind CSS, and Docker.

## Features

- 🚀 Fast static site generation with Astro
- 🎨 Tailwind CSS for styling
- 📝 Markdown-based blog/content
- 🐳 Docker containerized
- 📱 Responsive design

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:4321`

### Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build and run manually
docker build -t profile .
docker run -p 3000:80 profile
```

Visit `http://localhost:3000`

## Project Structure

```
src/
├── layouts/       # Page layouts
├── pages/         # Routes (index, professional, personal, blog)
├── components/    # Reusable components
├── content/       # Markdown content (blog posts)
└── styles/        # Global styles
```

## Customization

1. Update personal information in `src/pages/index.astro`
2. Add projects in `src/pages/professional.astro` and `src/pages/personal.astro`
3. Create blog posts in `src/content/blog/`
4. Customize colors in `tailwind.config.mjs`
