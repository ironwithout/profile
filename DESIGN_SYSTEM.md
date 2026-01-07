# Tech Design System Documentation

## Overview
This is a **Tech-inspired design system** built with Astro and Tailwind CSS, featuring minimalistic design, high contrast, and pixel/dot matrix aesthetics inspired by Nothing's design philosophy. Clean, modern, and professional—perfect for technical portfolios that need to be HR-friendly.

**Key Characteristics:**
- ● Minimalistic & clean interface
- ● High contrast for readability
- ● Pixel/dot matrix aesthetic (● bullets)
- ● Professional typography
- ● No technical jargon or terminal commands

---

## 🎨 Design Tokens

### Colors (Tailwind Config)

#### Tech Base Colors
```css
bg-tech-bg        /* #0a0a0f - Main background */
bg-tech-surface   /* #111118 - Card/surface background */
border-tech-border /* #1f2937 - Default borders */
hover:bg-tech-hover /* #374151 - Hover state for borders */
```

#### Accent Colors
```css
text-accent-primary   /* #22d3ee - Cyan (primary actions, tech tags) */
text-accent-secondary /* #3b82f6 - Blue (links, secondary elements) */
text-accent-success   /* #10b981 - Green/Emerald (active status, prompts) */
text-accent-warning   /* #f59e0b - Amber (warnings) */
```

#### Text Colors
```css
text-text-primary     /* #f9fafb - White (headings, important text) */
text-text-secondary   /* #d1d5db - Gray 300 (body text) */
text-text-muted       /* #9ca3af - Gray 400 (less important text) */
text-text-dim         /* #6b7280 - Gray 500 (very subtle text) */
```

---

## 🧩 Reusable CSS Classes

These are defined in `src/styles/global.css` using `@layer components`:

### Layout & Structure

#### Tech Indentation
```html
<div class="tech-indent">
  <!-- Creates left border + padding (ml-6 pl-6 border-l-2) -->
</div>
```

#### Tech Card
```html
<div class="tech-card">
  <!-- Styled surface with border and hover effect -->
</div>
```

#### Section Header
```html
<div class="tech-section-header">
  <span class="text-accent-primary">●</span>
  <span>Section Title</span>
</div>
```

### Bullets & Status Indicators

```html
<span class="tech-bullet">●</span>          <!-- Cyan bullet -->
<span class="tech-bullet-success">●</span>  <!-- Green bullet -->
<span class="status-active">●</span>            <!-- Active status (green) -->
<span class="status-inactive">●</span>          <!-- Inactive status (blue) -->
```

### Typography

```html
<h1 class="tech-h1">Large Heading</h1>
<h2 class="tech-h2">Medium Heading</h2>
<h3 class="tech-h3">Small Heading (cyan)</h3>
<p class="tech-text">Body text</p>
<p class="tech-text-muted">Muted text</p>
<div class="tech-prompt">Command</div>      <!-- Adds $ prefix -->
<div class="tech-tree-branch">Content</div> <!-- Adds ┖ prefix -->
```

### Tags

```html
<span class="tech-tag">React</span>           <!-- Cyan accent tag -->
<span class="tech-tag-muted">Docker</span>    <!-- Gray muted tag -->
```

### Links

```html
<a class="tech-link" href="#">Link</a>         <!-- Basic link -->
<a class="tech-link-arrow" href="#">Link</a>   <!-- Link with → prefix -->
```

---

## 🎯 Astro Components

### TechSection
Wraps content in a consistent section with optional title and bullet.

```astro
---
import TechSection from '../components/TechSection.astro';
---

<TechSection title="Skills" bulletType="primary">
  <div class="tech-indent">
    <!-- Your content here -->
  </div>
</TechSection>

<!-- Without title -->
<TechSection>
  <!-- Content -->
</TechSection>
```

**Props:**
- `title?: string` - Optional section title
- `bulletType?: 'primary' | 'success' | 'secondary'` - Bullet color (default: 'primary')
- `class?: string` - Additional CSS classes

---

### TechText
Typography component with semantic variants.

```astro
---
import TechText from '../components/TechText.astro';
---

<TechText variant="h1">Main Heading</TechText>
<TechText variant="h2">Sub Heading</TechText>
<TechText variant="h3">Section Title</TechText>
<TechText variant="body">Regular paragraph text</TechText>
<TechText variant="muted">Less important text</TechText>
<TechText variant="prompt">$ command</TechText>
<TechText variant="tree-branch">┖ Description text</TechText>

<!-- Override HTML element -->
<TechText variant="h1" as="h2">Renders as h2 but styled as h1</TechText>
```

**Props:**
- `variant?: 'h1' | 'h2' | 'h3' | 'body' | 'muted' | 'prompt' | 'tree-branch'`
- `as?: string` - Override HTML element (default varies by variant)
- `class?: string` - Additional CSS classes

---

### TechTag
Styled technology/skill tags.

```astro
---
import TechTag from '../components/TechTag.astro';
---

<TechTag>React</TechTag>                      <!-- Primary cyan accent -->
<TechTag variant="muted">Docker</TechTag>     <!-- Muted gray style -->
```

**Props:**
- `variant?: 'primary' | 'muted'` - Style variant (default: 'primary')
- `class?: string` - Additional CSS classes

---

### TechLink
Consistent link styling with optional arrow prefix.

```astro
---
import TechLink from '../components/TechLink.astro';
---

<TechLink href="/blog">Blog</TechLink>
<TechLink href="/blog" arrow>Blog</TechLink>        <!-- With → arrow -->
<TechLink href="https://github.com" external arrow>     <!-- External link -->
  GitHub
</TechLink>
```

**Props:**
- `href: string` - Link destination (required)
- `arrow?: boolean` - Add → arrow prefix
- `external?: boolean` - Add target="_blank" and rel attributes
- `class?: string` - Additional CSS classes

---

## 📝 Usage Examples

### Example 1: Simple Section with Text
```astro
<TechSection title="About Me" bulletType="success">
  <div class="tech-indent">
    <TechText variant="body">
      I'm a software engineer passionate about building elegant solutions.
    </TechText>
  </div>
</TechSection>
```

### Example 2: Skills List with Tags
```astro
<TechSection title="Technologies">
  <div class="tech-indent">
    <TechText variant="h3">Frontend</TechText>
    <div class="flex flex-wrap gap-2 mt-3">
      <TechTag>React</TechTag>
      <TechTag>TypeScript</TechTag>
      <TechTag>Tailwind</TechTag>
    </div>
  </div>
</TechSection>
```

### Example 3: Links Section
```astro
<TechSection title="Connect" bulletType="success">
  <div class="tech-indent flex flex-col gap-3">
    <TechLink href="https://github.com/username" external arrow>
      github.com/username
    </TechLink>
    <TechLink href="https://linkedin.com/in/username" external arrow>
      linkedin.com/in/username
    </TechLink>
  </div>
</TechSection>
```

### Example 4: Custom Styled Card
```astro
<div class="tech-card">
  <TechText variant="h2">Project Title</TechText>
  <TechText variant="body" class="mb-4">
    Project description goes here.
  </TechText>
  <div class="flex gap-2">
    <TechTag>Node.js</TechTag>
    <TechTag>PostgreSQL</TechTag>
  </div>
</div>
```

---

## 🎨 Quick Reference

### Common Patterns

**Page Container:**
```html
<div class="min-h-screen bg-tech-bg">
  <div class="container mx-auto px-4 py-12 max-w-5xl">
    <!-- Content -->
  </div>
</div>
```

**Tech Path Breadcrumb:**
```html
<div class="text-text-dim text-sm mb-2">~/path/to/section</div>
```

**Grid Layout:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Items -->
</div>
```

**Flex Layout:**
```html
<div class="flex items-center gap-4">
  <!-- Items -->
</div>
```

---

## 🚀 Best Practices

1. **Use semantic components** - Prefer `<TechText variant="h1">` over `<h1 class="tech-h1">`
2. **Compose classes** - Add utility classes to components: `<TechTag class="text-lg">React</TechTag>`
3. **Stay consistent** - Always use design tokens (accent-primary, text-secondary, etc.) instead of arbitrary colors
4. **Responsive design** - Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`
5. **Accessibility** - Ensure proper heading hierarchy and semantic HTML
6. **Dark mode only** - This design system is optimized for dark mode, no light mode variants needed

---

## 🔧 Extending the System

### Adding a New Color
1. Add to `tailwind.config.mjs` under `theme.extend.colors`
2. Document in this file
3. Use as `text-your-color` or `bg-your-color`

### Creating New Components
1. Create component in `src/components/`
2. Use TypeScript interface for props
3. Leverage existing CSS classes and design tokens
4. Document usage in this file

### Adding CSS Utilities
1. Add to `src/styles/global.css` under `@layer components`
2. Follow naming convention: `tech-*` or `tech-*`
3. Document in this file
