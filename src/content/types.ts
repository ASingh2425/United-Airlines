export type EvidenceStatus =
  | "company-reported"
  | "report-derived"
  | "management-interpretation";

export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
      lead?: boolean;
    }
  | {
      type: "heading";
      text: string;
      level: 2 | 3;
    }
  | {
      type: "bullets";
      items: string[];
    }
  | {
      type: "stat";
      label: string;
      value: string;
      context: string;
      sourceIds: string[];
    }
  | {
      type: "chart";
      chartId: string;
      title: string;
      description?: string;
      sourceIds: string[];
    }
  | {
      type: "diagram";
      diagramId: string;
      title: string;
      description: string;
    }
  | {
      type: "analysis";
      title: string;
      text: string;
      evidenceStatus: EvidenceStatus;
    }
  | {
      type: "quote";
      quote: string;
      author?: string;
      role?: string;
      sourceId?: string;
    };

export interface ChapterSection {
  id: string; // e.g., "1.1", "2.1"
  heading: string;
  blocks: ContentBlock[];
  sourceIds: string[];
}

export interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  managementFunction: string;
  introduction: string;
  sections: ChapterSection[];
  keyTakeaways: string[];
  visualizations?: string[];
  sourceIds: string[];
}

export interface ReferenceItem {
  id: string;
  citation: string;
  author: string;
  title: string;
  publisher: string;
  year: string;
  type: "sec-filing" | "academic" | "industry" | "corporate" | "regulatory";
  url?: string;
  annotation: string;
  verifiedStatus: "verified" | "derived" | "context";
}
