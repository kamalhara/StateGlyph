import type { ReactNode } from "react";

import type { UploadState } from "@stateicons/core";
import { UploadStateIcon } from "@stateicons/react";

export type IconStateRecord = {
  name: string;
  label: string;
  description: string;
};

type RenderIconOptions = {
  state: string;
  size: number;
  className?: string;
};

export type IconRecord = {
  slug: string;
  name: string;
  componentName: string;
  category: string;
  source: string;
  license: string;
  description: string;
  keywords: readonly string[];
  states: readonly IconStateRecord[];
  usage: string;
  render: (options: RenderIconOptions) => ReactNode;
};

const uploadStates = [
  { name: "idle", label: "Ready", description: "Waiting for a file." },
  {
    name: "loading",
    label: "Uploading",
    description: "A transfer is in progress.",
  },
  {
    name: "success",
    label: "Complete",
    description: "The file was received.",
  },
  {
    name: "error",
    label: "Failed",
    description: "The transfer was interrupted.",
  },
] as const satisfies readonly (IconStateRecord & { name: UploadState })[];

export const iconCatalog = [
  {
    slug: "upload",
    name: "Upload",
    componentName: "UploadStateIcon",
    category: "File actions",
    source: "Lucide",
    license: "ISC",
    description:
      "Communicate the full upload flow with one component and a typed state prop.",
    keywords: ["file", "transfer", "progress", "complete", "error"],
    states: uploadStates,
    usage: `import { UploadStateIcon } from "@stateicons/react";

function UploadStatus({ status }) {
  return (
    <UploadStateIcon
      state={status}
      decorative
    />
  );
}`,
    render: ({ state, size, className }: RenderIconOptions) => (
      <UploadStateIcon
        state={state as UploadState}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
] as const satisfies readonly IconRecord[];

export const iconCategories = Array.from(
  new Set(iconCatalog.map((icon) => icon.category)),
);

export function getIconBySlug(slug: string) {
  return iconCatalog.find((icon) => icon.slug === slug);
}
