export type SidebarItem = { label: string; icon: string; href: string };
export type SidebarGroup = { title: string; items: SidebarItem[] };

export const docsConfig: { sidebar: SidebarGroup[] } = {
  sidebar: [
    {
      title: "Get Started",
      items: [
        { label: "Introduction", icon: "home", href: "/" },
        { label: "Quick Start", icon: "bolt", href: "/docs/quick-start" },
        { label: "How Roadmaps Work", icon: "route", href: "/docs/how-roadmaps-work" },
        { label: "Learning Paths", icon: "nodes", href: "/docs/learning-paths" },
      ],
    },
    {
      title: "Browse",
      items: [
        { label: "All Roadmaps", icon: "grid", href: "/docs/all-roadmaps" },
        { label: "By Category", icon: "folder", href: "/docs/by-category" },
        { label: "Learning Resources", icon: "send", href: "/docs/resources" },
        { label: "Project Ideas", icon: "spark", href: "/docs/project-ideas" },
      ],
    },
    {
      title: "Guides",
      items: [
        { label: "Study Guide", icon: "book", href: "/docs/study-guide" },
        { label: "Best Practices", icon: "clock", href: "/docs/best-practices" },
        { label: "Common Questions", icon: "help", href: "/docs/common-questions" },
        { label: "Contributing", icon: "file", href: "/docs/contributing" },
      ],
    },
    {
      title: "About",
      items: [
        { label: "About DemonTech", icon: "info", href: "/docs/about-demontech" },
        { label: "Our Mission", icon: "target", href: "/docs/our-mission" },
        { label: "Changelog", icon: "search", href: "/docs/changelog" },
      ],
    },
  ]
};
