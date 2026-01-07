/**
 * Professional experience data
 */
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  status: 'current' | 'completed';
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "TechCorp",
    role: "Senior Full-Stack Developer",
    period: "2022 → Present",
    location: "Remote",
    status: "current",
    description: "Leading development of scalable web applications and architecting cloud infrastructure",
    achievements: [
      "Architected microservices infrastructure serving 1M+ daily users",
      "Reduced API response time by 60% through database optimization",
      "Led cross-functional team of 5 engineers delivering major features on schedule",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    company: "Digital Studio",
    role: "Full-Stack Developer",
    period: "2020 → 2022",
    location: "Hybrid",
    status: "completed",
    description: "Built responsive web applications and RESTful APIs for various client projects",
    achievements: [
      "Delivered 15+ client projects on time with 95% satisfaction rate",
      "Implemented CI/CD pipeline reducing deployment time by 40%",
      "Mentored 3 junior developers in modern web development practices",
    ],
    technologies: ["Vue.js", "Python", "Django", "Redis", "MongoDB", "GCP"],
  },
  {
    company: "StartupCo",
    role: "Junior Developer",
    period: "2018 → 2020",
    location: "On-site",
    status: "completed",
    description: "Contributed to full-stack development of SaaS platform for small businesses",
    achievements: [
      "Developed key features used by 10,000+ active users",
      "Improved page load performance by 35% through code optimization",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
    technologies: ["JavaScript", "Express", "MySQL", "Kubernetes", "Jenkins"],
  },
];
