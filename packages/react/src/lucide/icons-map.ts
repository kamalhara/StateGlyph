import {
  CircleAlert,
  CircleCheck,
  LoaderCircle,
  Upload,
  type LucideIcon,
} from "lucide-react";

export const lucideIconMap = {
  upload: Upload,
  "loader-circle": LoaderCircle,
  "circle-check": CircleCheck,
  "circle-alert": CircleAlert,
} satisfies Record<string, LucideIcon>;

export type LucideIconName = keyof typeof lucideIconMap;
