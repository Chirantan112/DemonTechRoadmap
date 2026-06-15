export interface DocTopic {
  title: string       // e.g. "HTML Introduction"
  slug: string        // e.g. "introduction"
  path: string        // full route e.g. "/docs/html/introduction"
}

export interface DocLanguage {
  id: string          // e.g. "html"
  label: string       // e.g. "HTML"
  color: string       // accent color for that language
  icon: string        // emoji or icon name e.g. "🌐"
  topics: DocTopic[]
}
