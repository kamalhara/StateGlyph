export type StateIconCategory =
  | "async"
  | "media"
  | "navigation"
  | "feedback"
  | "device"
  | "form"
  | "commerce"
  | "notification";

export type StateIconTransition =
  "crossfade" | "scale-fade" | "rotate" | "slide" | "morph";

export type StateIconLibrary = "lucide" | (string & {});

export interface StateIconStateDefinition {
  icon: string;
  label: string;
  description?: string;
  continuous?: boolean;
}
export type StateIconStates = Record<string, StateIconStateDefinition>;

export interface StateIconSource {
  library: StateIconLibrary;
  license: string;
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
