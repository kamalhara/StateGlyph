export type StateIconCategory =
  "async" | "media" | "navigation" | "feedback" | "device";

export type StateIconTransition =
  "crossfade" | "scale-fade" | "rotate" | "slide" | "morph";

export interface StateIconStateDefinition {
  icon: string;
  label: string;
  continous?: boolean;
}
export type StateIconStates = Record<string, StateIconStateDefinition>;

export interface StateIconSource {
  library: "lucide";
  license: "ISC";
  url: string;
  icons: readonly string[];
}

export interface StateIconDefinition<
  States extends StateIconStates = StateIconStates,
> {
  id: string;
  title: string;
  description: string;
  category: StateIconCategory;
  states: States;
  initialState: keyof States & string;
  transition: StateIconTransition;
  tags: readonly string[];
  source: StateIconSource;
}
