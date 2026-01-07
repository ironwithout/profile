/**
 * Personal and professional projects
 */
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Weather App",
    description: "Beautiful weather application with 7-day forecasts and location-based alerts.",
    technologies: ["Astro", "Tailwind", "OpenWeather API"],
    link: "https://example.com",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Markdown Blog",
    description: "Static site generator for blogs with markdown support and SEO optimization.",
    technologies: ["Astro", "TypeScript", "MDX"],
    github: "https://github.com/yourusername/blog",
  },
  {
    title: "Task Manager",
    description: "Minimalist task management app with drag-and-drop and local storage.",
    technologies: ["React", "IndexedDB", "CSS"],
    link: "https://example.com",
    github: "https://github.com/yourusername/task-manager",
  },
];
