export type Route = {
  path: string;
  element: JSX.Element;
};

export interface AppRoutes {
  routes: Route[];
}

export type ContentItem = string | Skill | Record<string, string>;

export interface SectionContent {
  name: string;
  id: string;
  header: string;
  formText: string;
  content?: ContentItem[] | LinkItem[];
}

export type Skill = {
  name: string;
  type: string;
};

export interface LinkItem {
  url: string;
  title: string;
}

export interface BaseSectionProps {
  sectionHeader?: string;
  sectionContent?: ContentItem[] | LinkItem[];
  sectionId: string;
  fieldContent?: string;
}

export interface LinksSectionProps extends Omit<BaseSectionProps, 'sectionContent'> {
  sectionContent?: LinkItem[];
}