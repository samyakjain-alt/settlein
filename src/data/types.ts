export type Tip = {
  id: string;
  text: string;
  author: string;
  upvotes: number;
};

export type Step = {
  id: string;
  title: string;
  summary: string;
  tips: Tip[];
};

export type Phase = {
  id: string;
  title: string;
  when: string;
  steps: Step[];
};

export type City = {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "coming-soon";
  phases: Phase[];
};
