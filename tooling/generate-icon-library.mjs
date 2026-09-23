import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const s = (name, icon, label, description, continuous = false) => ({
  name,
  icon,
  label,
  description,
  continuous,
});
const asyncIcon = (
  slug,
  camel,
  pascal,
  title,
  actionIcon,
  loadingName,
  loadingLabel,
  successName,
  successLabel,
  description,
) => ({
  slug,
  camel,
  pascal,
  title,
  actionIcon,
  description,
  coreCategory: "async",
  docsCategory: "Async workflows",
  transition: "scale-fade",
  initialState: "idle",
  states: [
    s("idle", actionIcon, title, `Ready to ${title.toLowerCase()}.`),
    s(
      loadingName,
      "loader-circle",
      loadingLabel,
      `${loadingLabel} is in progress.`,
      true,
    ),
    s(
      successName,
      successName === "installed" ? "package-check" : "circle-check",
      successLabel,
      `${successLabel} successfully.`,
    ),
    s(
      "error",
      "circle-alert",
      `${title} failed`,
      `The ${title.toLowerCase()} action failed.`,
    ),
  ],
});
const pair = (
  slug,
  camel,
  pascal,
  title,
  description,
  coreCategory,
  docsCategory,
  initialState,
  states,
) => ({
  slug,
  camel,
  pascal,
  title,
  description,
  coreCategory,
  docsCategory,
  initialState,
  states,
  transition: "morph",
});

const icons = [
  asyncIcon(
    "upload",
    "upload",
    "Upload",
    "Upload",
    "upload",
    "loading",
    "Uploading",
    "success",
    "Upload complete",
    "Shows the current state of a file upload.",
  ),
  asyncIcon(
    "download",
    "download",
    "Download",
    "Download",
    "download",
    "loading",
    "Downloading",
    "success",
    "Download complete",
    "Shows the current state of a file download.",
  ),
  asyncIcon(
    "save",
    "save",
    "Save",
    "Save",
    "save",
    "saving",
    "Saving",
    "saved",
    "Saved",
    "Shows whether a change is saving, saved, or failed.",
  ),
  asyncIcon(
    "delete",
    "delete",
    "Delete",
    "Delete",
    "trash-2",
    "deleting",
    "Deleting",
    "deleted",
    "Deleted",
    "Shows the lifecycle of a delete action.",
  ),
  asyncIcon(
    "refresh",
    "refresh",
    "Refresh",
    "Refresh",
    "refresh-cw",
    "refreshing",
    "Refreshing",
    "complete",
    "Refresh complete",
    "Shows the progress and result of refreshing content.",
  ),
  asyncIcon(
    "sync",
    "sync",
    "Sync",
    "Sync",
    "refresh-cw",
    "syncing",
    "Syncing",
    "synced",
    "Synced",
    "Shows whether data is idle, syncing, synced, or failed.",
  ),
  asyncIcon(
    "send",
    "send",
    "Send",
    "Send",
    "send",
    "sending",
    "Sending",
    "sent",
    "Sent",
    "Shows the progress and result of sending content.",
  ),
  asyncIcon(
    "payment",
    "payment",
    "Payment",
    "Payment",
    "credit-card",
    "processing",
    "Processing payment",
    "success",
    "Payment complete",
    "Shows a payment moving through processing and completion.",
  ),
  asyncIcon(
    "add-to-cart",
    "addToCart",
    "AddToCart",
    "Add to cart",
    "shopping-cart",
    "adding",
    "Adding to cart",
    "added",
    "Added to cart",
    "Shows the lifecycle of adding an item to a cart.",
  ),
  asyncIcon(
    "submit",
    "submit",
    "Submit",
    "Submit",
    "send-horizontal",
    "submitting",
    "Submitting",
    "success",
    "Submission complete",
    "Shows the progress and result of a form submission.",
  ),
  asyncIcon(
    "install",
    "install",
    "Install",
    "Install",
    "package",
    "installing",
    "Installing",
    "installed",
    "Installed",
    "Shows the lifecycle of installing a package or application.",
  ),
  {
    slug: "publish",
    camel: "publish",
    pascal: "Publish",
    title: "Publish",
    description: "Shows content moving from draft to published.",
    coreCategory: "async",
    docsCategory: "Async workflows",
    transition: "scale-fade",
    initialState: "draft",
    states: [
      s("draft", "file-pen-line", "Draft", "The content is still a draft."),
      s(
        "publishing",
        "loader-circle",
        "Publishing",
        "Publication is in progress.",
        true,
      ),
      s("published", "circle-check", "Published", "The content is published."),
      s(
        "error",
        "circle-alert",
        "Publishing failed",
        "The content could not be published.",
      ),
    ],
  },
  pair(
    "play-pause",
    "playPause",
    "PlayPause",
    "Play and pause",
    "Switches between paused and playing media states.",
    "media",
    "Media controls",
    "paused",
    [
      s("paused", "play", "Play", "Media is paused and can be played."),
      s("playing", "pause", "Pause", "Media is playing and can be paused."),
    ],
  ),
  {
    slug: "playback",
    camel: "playback",
    pascal: "Playback",
    title: "Playback",
    description: "Represents idle, buffering, playing, and paused media.",
    coreCategory: "media",
    docsCategory: "Media controls",
    transition: "scale-fade",
    initialState: "idle",
    states: [
      s("idle", "play", "Play", "Media is ready to play."),
      s("buffering", "loader-circle", "Buffering", "Media is buffering.", true),
      s("playing", "pause", "Pause", "Media is currently playing."),
      s("paused", "play", "Resume", "Media is paused."),
    ],
  },
  pair(
    "volume",
    "volume",
    "Volume",
    "Volume",
    "Switches between audible and muted audio states.",
    "media",
    "Media controls",
    "audible",
    [
      s("audible", "volume-2", "Mute audio", "Audio is audible."),
      s("muted", "volume-x", "Unmute audio", "Audio is muted."),
    ],
  ),
  pair(
    "microphone",
    "microphone",
    "Microphone",
    "Microphone",
    "Switches between active and muted microphone states.",
    "media",
    "Media controls",
    "active",
    [
      s("active", "mic", "Mute microphone", "The microphone is active."),
      s("muted", "mic-off", "Unmute microphone", "The microphone is muted."),
    ],
  ),
  pair(
    "camera",
    "camera",
    "Camera",
    "Camera",
    "Switches between active and disabled camera states.",
    "media",
    "Media controls",
    "active",
    [
      s("active", "video", "Disable camera", "The camera is active."),
      s("disabled", "video-off", "Enable camera", "The camera is disabled."),
    ],
  ),
  pair(
    "fullscreen",
    "fullscreen",
    "Fullscreen",
    "Fullscreen",
    "Switches between windowed and fullscreen layouts.",
    "media",
    "Media controls",
    "windowed",
    [
      s("windowed", "maximize", "Enter fullscreen", "The view is windowed."),
      s("fullscreen", "minimize", "Exit fullscreen", "The view is fullscreen."),
    ],
  ),
  pair(
    "repeat",
    "repeat",
    "Repeat",
    "Repeat",
    "Shows whether media repeat is on or off.",
    "media",
    "Media controls",
    "off",
    [
      s("off", "repeat", "Turn repeat on", "Repeat is off."),
      s("on", "repeat-2", "Turn repeat off", "Repeat is on."),
    ],
  ),
  pair(
    "shuffle",
    "shuffle",
    "Shuffle",
    "Shuffle",
    "Shows whether shuffled playback is on or off.",
    "media",
    "Media controls",
    "off",
    [
      s("off", "list-ordered", "Turn shuffle on", "Shuffle is off."),
      s("on", "shuffle", "Turn shuffle off", "Shuffle is on."),
    ],
  ),
  pair(
    "menu",
    "menu",
    "Menu",
    "Menu",
    "Switches between closed and open navigation menus.",
    "navigation",
    "Navigation and layout",
    "closed",
    [
      s("closed", "menu", "Open menu", "The menu is closed."),
      s("open", "x", "Close menu", "The menu is open."),
    ],
  ),
  pair(
    "expand",
    "expand",
    "Expand",
    "Expand",
    "Switches between collapsed and expanded content.",
    "navigation",
    "Navigation and layout",
    "collapsed",
    [
      s("collapsed", "chevrons-up-down", "Expand", "The content is collapsed."),
      s("expanded", "chevrons-down-up", "Collapse", "The content is expanded."),
    ],
  ),
  pair(
    "sidebar",
    "sidebar",
    "Sidebar",
    "Sidebar",
    "Switches between open and closed sidebar layouts.",
    "navigation",
    "Navigation and layout",
    "open",
    [
      s("open", "panel-left-close", "Close sidebar", "The sidebar is open."),
      s("closed", "panel-left-open", "Open sidebar", "The sidebar is closed."),
    ],
  ),
  pair(
    "view",
    "view",
    "View",
    "Grid and list",
    "Switches a collection between grid and list layouts.",
    "navigation",
    "Navigation and layout",
    "grid",
    [
      s(
        "grid",
        "layout-grid",
        "Show as list",
        "The collection uses a grid layout.",
      ),
      s("list", "list", "Show as grid", "The collection uses a list layout."),
    ],
  ),
  pair(
    "chevron-vertical",
    "chevronVertical",
    "ChevronVertical",
    "Vertical chevron",
    "Switches between upward and downward directions.",
    "navigation",
    "Navigation and layout",
    "down",
    [
      s("up", "chevron-up", "Point up", "The chevron points upward."),
      s("down", "chevron-down", "Point down", "The chevron points downward."),
    ],
  ),
  pair(
    "chevron-horizontal",
    "chevronHorizontal",
    "ChevronHorizontal",
    "Horizontal chevron",
    "Switches between left and right directions.",
    "navigation",
    "Navigation and layout",
    "right",
    [
      s("left", "chevron-left", "Point left", "The chevron points left."),
      s("right", "chevron-right", "Point right", "The chevron points right."),
    ],
  ),
  pair(
    "panel",
    "panel",
    "Panel",
    "Panel",
    "Switches between restored and maximized panel sizes.",
    "navigation",
    "Navigation and layout",
    "restored",
    [
      s("restored", "maximize-2", "Maximize panel", "The panel is restored."),
      s("maximized", "minimize-2", "Restore panel", "The panel is maximized."),
    ],
  ),
  {
    slug: "copy",
    camel: "copy",
    pascal: "Copy",
    title: "Copy",
    description: "Shows idle, copied, and reset clipboard feedback.",
    coreCategory: "feedback",
    docsCategory: "Feedback and toggles",
    transition: "scale-fade",
    initialState: "idle",
    states: [
      s("idle", "copy", "Copy", "Content is ready to be copied."),
      s("copied", "check", "Copied", "Content was copied."),
      s("reset", "rotate-ccw", "Copy again", "Copy feedback has reset."),
    ],
  },
  pair(
    "like",
    "like",
    "Like",
    "Like",
    "Switches between liked and unliked feedback states.",
    "feedback",
    "Feedback and toggles",
    "unliked",
    [
      s("unliked", "heart", "Like", "The item is not liked."),
      s("liked", "heart-off", "Remove like", "The item is liked."),
    ],
  ),
  pair(
    "bookmark",
    "bookmark",
    "Bookmark",
    "Bookmark",
    "Switches between bookmarked and unbookmarked states.",
    "feedback",
    "Feedback and toggles",
    "unbookmarked",
    [
      s(
        "unbookmarked",
        "bookmark",
        "Add bookmark",
        "The item is not bookmarked.",
      ),
      s(
        "bookmarked",
        "bookmark-check",
        "Remove bookmark",
        "The item is bookmarked.",
      ),
    ],
  ),
];

const lucide = {
  bookmark: "Bookmark",
  "bookmark-check": "BookmarkCheck",
  check: "Check",
  "chevron-down": "ChevronDown",
  "chevron-left": "ChevronLeft",
  "chevron-right": "ChevronRight",
  "chevron-up": "ChevronUp",
  "chevrons-down-up": "ChevronsDownUp",
  "chevrons-up-down": "ChevronsUpDown",
  "circle-alert": "CircleAlert",
  "circle-check": "CircleCheck",
  copy: "Copy",
  "credit-card": "CreditCard",
  download: "Download",
  "file-pen-line": "FilePenLine",
  heart: "Heart",
  "heart-off": "HeartOff",
  "layout-grid": "LayoutGrid",
  list: "List",
  "list-ordered": "ListOrdered",
  "loader-circle": "LoaderCircle",
  maximize: "Maximize",
  "maximize-2": "Maximize2",
  menu: "Menu",
  mic: "Mic",
  "mic-off": "MicOff",
  minimize: "Minimize",
  "minimize-2": "Minimize2",
  package: "Package",
  "package-check": "PackageCheck",
  "panel-left-close": "PanelLeftClose",
  "panel-left-open": "PanelLeftOpen",
  pause: "Pause",
  play: "Play",
  "refresh-cw": "RefreshCw",
  repeat: "Repeat",
  "repeat-2": "Repeat2",
  "rotate-ccw": "RotateCcw",
  save: "Save",
  send: "Send",
  "send-horizontal": "SendHorizontal",
  "shopping-cart": "ShoppingCart",
  shuffle: "Shuffle",
  "trash-2": "Trash2",
  upload: "Upload",
  video: "Video",
  "video-off": "VideoOff",
  "volume-2": "Volume2",
  "volume-x": "VolumeX",
  x: "X",
};
const q = JSON.stringify;

const coreFile = (
  icon,
) => `import { defineStateIcon } from "../define-state-icon";

export const ${icon.camel}StateIcon = defineStateIcon({
  id: ${q(icon.slug)},
  title: ${q(icon.title)},
  description: ${q(icon.description)},
  category: ${q(icon.coreCategory)},
  states: {
${icon.states.map((x) => `    ${q(x.name)}: { icon: ${q(x.icon)}, label: ${q(x.label)}, description: ${q(x.description)}${x.continuous ? ", continuous: true" : ""} },`).join("\n")}
  },
  initialState: ${q(icon.initialState)},
  transition: ${q(icon.transition)},
  tags: ${q([...new Set([icon.slug, ...icon.slug.split("-"), ...icon.states.map((x) => x.name)])])},
  source: { library: "lucide", license: "ISC", url: "https://lucide.dev", icons: ${q([...new Set(icon.states.map((x) => x.icon))])} },
});

export type ${icon.pascal}State = keyof typeof ${icon.camel}StateIcon.states;
`;

const reactFile = (
  icon,
) => `import { ${icon.camel}StateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ${icon.pascal}StateIconProps = Omit<StateIconProps<typeof ${icon.camel}StateIcon.states>, "definition">;
export function ${icon.pascal}StateIcon(props: ${icon.pascal}StateIconProps) {
  return <StateIcon definition={${icon.camel}StateIcon} {...props} />;
}
`;

const coreCatalog = `${icons.map((x) => `import { ${x.camel}StateIcon } from "./icons/${x.slug}";`).join("\n")}

export const stateIconCatalog = [
${icons.map((x) => `  ${x.camel}StateIcon,`).join("\n")}
] as const;
`;

const coreIndex = `export { defineStateIcon } from "./define-state-icon";
export { stateIconCatalog } from "./catalog";
${icons.map((x) => `export { ${x.camel}StateIcon } from "./icons/${x.slug}";`).join("\n")}
${icons.map((x) => `export type { ${x.pascal}State } from "./icons/${x.slug}";`).join("\n")}
export type { StateIconCategory, StateIconDefinition, StateIconSource, StateIconStateDefinition, StateIconStates, StateIconTransition } from "./types";
`;

const reactIndex = `export { StateIcon, type StateIconProps } from "./components/state-icon";
${icons.map((x) => `export { ${x.pascal}StateIcon, type ${x.pascal}StateIconProps } from "./icons/${x.slug}-state-icon";`).join("\n")}
`;

const usedGlyphs = [
  ...new Set(icons.flatMap((x) => x.states.map((y) => y.icon))),
].sort();
const lucideMap = `import {
${[...new Set(usedGlyphs.map((x) => lucide[x]))]
  .sort()
  .map((x) => `  ${x},`)
  .join("\n")}
  type LucideIcon,
} from "lucide-react";
export const lucideIconMap = {
${usedGlyphs.map((x) => `  ${q(x)}: ${lucide[x]},`).join("\n")}
} satisfies Record<string, LucideIcon>;
export type LucideIconName = keyof typeof lucideIconMap;
`;

const docsRecords = icons
  .map(
    (x) => `  {
    slug: ${q(x.slug)}, name: ${x.camel}StateIcon.title, componentName: "${x.pascal}StateIcon", category: ${q(x.docsCategory)},
    source: "Lucide", license: ${x.camel}StateIcon.source.license, description: ${x.camel}StateIcon.description,
    keywords: ${x.camel}StateIcon.tags, states: toStateRecords(${x.camel}StateIcon),
    usage: ${q(`import { ${x.pascal}StateIcon } from "@stateicons/react";\n\n<${x.pascal}StateIcon state="${x.initialState}" decorative />`)},
    render: ({ state, size, className }: RenderIconOptions) => <${x.pascal}StateIcon state={state as ComponentProps<typeof ${x.pascal}StateIcon>["state"]} size={size} strokeWidth={1.65} decorative className={className} />,
  },`,
  )
  .join("\n");

const docsRegistry = `import type { ComponentProps, ReactNode } from "react";
import {
  ${icons.map((x) => `  ${x.camel}StateIcon,`).join("\n")}
  type StateIconDefinition,
  type StateIconStates,
} from "@stateicons/core";
import {
${icons.map((x) => `  ${x.pascal}StateIcon,`).join("\n")}
} from "@stateicons/react";

export type IconStateRecord = { name: string; label: string; description: string; continuous: boolean };
type RenderIconOptions = { state: string; size: number; className?: string };
export type IconRecord = { slug: string; name: string; componentName: string; category: string; source: string; license: string; description: string; keywords: readonly string[]; states: readonly IconStateRecord[]; usage: string; render: (options: RenderIconOptions) => ReactNode };
function toStateRecords<States extends StateIconStates>(definition: StateIconDefinition<States>): IconStateRecord[] {
  return Object.entries(definition.states).map(([name, value]) => ({ name, label: value.label, description: value.description ?? \`Shows the \${name} state.\`, continuous: value.continuous ?? false }));
}
export const categoryDescriptions = {
  "Async workflows": "Uploads, saves, payments, submissions, and other task lifecycles.",
  "Media controls": "Playback, audio, camera, and viewing states.",
  "Navigation and layout": "Menus, panels, views, and directional controls.",
  "Feedback and toggles": "Temporary confirmation and saved preference states.",
} as const;
export const iconCatalog = [
${docsRecords}
] as const satisfies readonly IconRecord[];
export const iconCategories = Array.from(new Set(iconCatalog.map((icon) => icon.category)));
export function getIconBySlug(slug: string) { return iconCatalog.find((icon) => icon.slug === slug); }
`;

await mkdir(path.join(root, "packages/core/src/icons"), { recursive: true });
await mkdir(path.join(root, "packages/react/src/icons"), { recursive: true });
for (const icon of icons) {
  await writeFile(
    path.join(root, `packages/core/src/icons/${icon.slug}.ts`),
    coreFile(icon),
  );
  await writeFile(
    path.join(root, `packages/react/src/icons/${icon.slug}-state-icon.tsx`),
    reactFile(icon),
  );
}
await writeFile(path.join(root, "packages/core/src/index.ts"), coreIndex);
await writeFile(path.join(root, "packages/core/src/catalog.ts"), coreCatalog);
await writeFile(path.join(root, "packages/react/src/index.ts"), reactIndex);
await writeFile(
  path.join(root, "packages/react/src/lucide/icons-map.ts"),
  lucideMap,
);
await writeFile(
  path.join(root, "apps/docs/src/data/icon-catalog.tsx"),
  docsRegistry,
);
console.log(`Generated ${icons.length} StateIcons.`);
