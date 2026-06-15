export interface DocTopic {
  title: string;
  slug: string;
  path: string;
}

export interface DocSection {
  title: string;
  items: DocTopic[];
}

export interface DocLanguage {
  id: string;
  label: string;
  color: string;
  icon: string;
  sections: DocSection[];
  topics: DocTopic[]; // Flattened array for easy prev/next navigation
}
