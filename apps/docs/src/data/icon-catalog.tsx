import type { ComponentProps, ReactNode } from "react";
import {
  wifiStateIcon,
  bluetoothStateIcon,
  ethernetStateIcon,
  cellularStateIcon,
  lockStateIcon,
  visibilityStateIcon,
  shieldStateIcon,
  authenticationStateIcon,
  themeStateIcon,
  brightnessStateIcon,
  contrastStateIcon,
  toolStateIcon,
  textFormatStateIcon,
  alignmentStateIcon,
  folderStateIcon,
  fileAccessStateIcon,
  archiveStateIcon,
  linkStateIcon,
  weatherStateIcon,
  daylightStateIcon,
  temperatureStateIcon,
  taskStateIcon,
  priorityStateIcon,
  pinStateIcon,
  uploadStateIcon,
  downloadStateIcon,
  saveStateIcon,
  deleteStateIcon,
  refreshStateIcon,
  syncStateIcon,
  sendStateIcon,
  paymentStateIcon,
  addToCartStateIcon,
  submitStateIcon,
  installStateIcon,
  publishStateIcon,
  playPauseStateIcon,
  playbackStateIcon,
  volumeStateIcon,
  microphoneStateIcon,
  cameraStateIcon,
  fullscreenStateIcon,
  repeatStateIcon,
  shuffleStateIcon,
  menuStateIcon,
  expandStateIcon,
  sidebarStateIcon,
  viewStateIcon,
  chevronVerticalStateIcon,
  chevronHorizontalStateIcon,
  panelStateIcon,
  copyStateIcon,
  likeStateIcon,
  bookmarkStateIcon,
  notificationStateIcon,
  type StateIconDefinition,
  type StateIconStates,
} from "@stateglyph/core";
import {
  WifiStateIcon,
  BluetoothStateIcon,
  EthernetStateIcon,
  CellularStateIcon,
  LockStateIcon,
  VisibilityStateIcon,
  ShieldStateIcon,
  AuthenticationStateIcon,
  ThemeStateIcon,
  BrightnessStateIcon,
  ContrastStateIcon,
  ToolStateIcon,
  TextFormatStateIcon,
  AlignmentStateIcon,
  FolderStateIcon,
  FileAccessStateIcon,
  ArchiveStateIcon,
  LinkStateIcon,
  WeatherStateIcon,
  DaylightStateIcon,
  TemperatureStateIcon,
  TaskStateIcon,
  PriorityStateIcon,
  PinStateIcon,
  UploadStateIcon,
  DownloadStateIcon,
  SaveStateIcon,
  DeleteStateIcon,
  RefreshStateIcon,
  SyncStateIcon,
  SendStateIcon,
  PaymentStateIcon,
  AddToCartStateIcon,
  SubmitStateIcon,
  InstallStateIcon,
  PublishStateIcon,
  PlayPauseStateIcon,
  PlaybackStateIcon,
  VolumeStateIcon,
  MicrophoneStateIcon,
  CameraStateIcon,
  FullscreenStateIcon,
  RepeatStateIcon,
  ShuffleStateIcon,
  MenuStateIcon,
  ExpandStateIcon,
  SidebarStateIcon,
  ViewStateIcon,
  ChevronVerticalStateIcon,
  ChevronHorizontalStateIcon,
  PanelStateIcon,
  CopyStateIcon,
  LikeStateIcon,
  BookmarkStateIcon,
  NotificationStateIcon,
} from "@stateglyph/react";

export type IconStateRecord = {
  name: string;
  label: string;
  description: string;
  continuous: boolean;
};
type RenderIconOptions = { state: string; size: number; className?: string };
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
function toStateRecords<States extends StateIconStates>(
  definition: StateIconDefinition<States>,
): IconStateRecord[] {
  return Object.entries(definition.states).map(([name, value]) => ({
    name,
    label: value.label,
    description: value.description ?? `Shows the ${name} state.`,
    continuous: value.continuous ?? false,
  }));
}
export const categoryDescriptions = {
  Connectivity: "Wireless, Bluetooth, wired connections, and signal strength.",
  "Security and privacy":
    "Access, visibility, protection, and identity states.",
  Appearance: "Themes, brightness, and contrast preferences.",
  "Editing tools": "Selection tools, text formatting, and alignment.",
  "Files and folders": "Folders, sharing, archives, and links.",
  "Weather and time": "Weather conditions, daylight, and temperature.",
  Productivity: "Task progress, priority, and pinned items.",
  "Async workflows":
    "Uploads, saves, payments, submissions, and other task lifecycles.",
  "Form states": "Submission and validation states for forms and fields.",
  Commerce: "Cart, checkout, and payment workflows.",
  Notifications: "Notification preferences and unread activity.",
  "Media controls": "Playback, audio, camera, and viewing states.",
  "Navigation and layout": "Menus, panels, views, and directional controls.",
  "Feedback and toggles": "Temporary confirmation and saved preference states.",
} as const;
const iconRecords = [
  {
    slug: "wifi",
    name: wifiStateIcon.title,
    componentName: "WifiStateIcon",
    category: "Connectivity",
    source: "Lucide",
    license: wifiStateIcon.source.license,
    description: wifiStateIcon.description,
    keywords: wifiStateIcon.tags,
    states: toStateRecords(wifiStateIcon),
    usage:
      'import { WifiStateIcon } from "@stateglyph/react";\n\n<WifiStateIcon state="off" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <WifiStateIcon
        state={state as ComponentProps<typeof WifiStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "bluetooth",
    name: bluetoothStateIcon.title,
    componentName: "BluetoothStateIcon",
    category: "Connectivity",
    source: "Lucide",
    license: bluetoothStateIcon.source.license,
    description: bluetoothStateIcon.description,
    keywords: bluetoothStateIcon.tags,
    states: toStateRecords(bluetoothStateIcon),
    usage:
      'import { BluetoothStateIcon } from "@stateglyph/react";\n\n<BluetoothStateIcon state="off" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <BluetoothStateIcon
        state={state as ComponentProps<typeof BluetoothStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "ethernet",
    name: ethernetStateIcon.title,
    componentName: "EthernetStateIcon",
    category: "Connectivity",
    source: "Lucide",
    license: ethernetStateIcon.source.license,
    description: ethernetStateIcon.description,
    keywords: ethernetStateIcon.tags,
    states: toStateRecords(ethernetStateIcon),
    usage:
      'import { EthernetStateIcon } from "@stateglyph/react";\n\n<EthernetStateIcon state="disconnected" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <EthernetStateIcon
        state={state as ComponentProps<typeof EthernetStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "cellular",
    name: cellularStateIcon.title,
    componentName: "CellularStateIcon",
    category: "Connectivity",
    source: "Lucide",
    license: cellularStateIcon.source.license,
    description: cellularStateIcon.description,
    keywords: cellularStateIcon.tags,
    states: toStateRecords(cellularStateIcon),
    usage:
      'import { CellularStateIcon } from "@stateglyph/react";\n\n<CellularStateIcon state="offline" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <CellularStateIcon
        state={state as ComponentProps<typeof CellularStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "lock",
    name: lockStateIcon.title,
    componentName: "LockStateIcon",
    category: "Security and privacy",
    source: "Lucide",
    license: lockStateIcon.source.license,
    description: lockStateIcon.description,
    keywords: lockStateIcon.tags,
    states: toStateRecords(lockStateIcon),
    usage:
      'import { LockStateIcon } from "@stateglyph/react";\n\n<LockStateIcon state="unlocked" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <LockStateIcon
        state={state as ComponentProps<typeof LockStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "visibility",
    name: visibilityStateIcon.title,
    componentName: "VisibilityStateIcon",
    category: "Security and privacy",
    source: "Lucide",
    license: visibilityStateIcon.source.license,
    description: visibilityStateIcon.description,
    keywords: visibilityStateIcon.tags,
    states: toStateRecords(visibilityStateIcon),
    usage:
      'import { VisibilityStateIcon } from "@stateglyph/react";\n\n<VisibilityStateIcon state="visible" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <VisibilityStateIcon
        state={state as ComponentProps<typeof VisibilityStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "shield",
    name: shieldStateIcon.title,
    componentName: "ShieldStateIcon",
    category: "Security and privacy",
    source: "Lucide",
    license: shieldStateIcon.source.license,
    description: shieldStateIcon.description,
    keywords: shieldStateIcon.tags,
    states: toStateRecords(shieldStateIcon),
    usage:
      'import { ShieldStateIcon } from "@stateglyph/react";\n\n<ShieldStateIcon state="unprotected" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ShieldStateIcon
        state={state as ComponentProps<typeof ShieldStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "authentication",
    name: authenticationStateIcon.title,
    componentName: "AuthenticationStateIcon",
    category: "Security and privacy",
    source: "Lucide",
    license: authenticationStateIcon.source.license,
    description: authenticationStateIcon.description,
    keywords: authenticationStateIcon.tags,
    states: toStateRecords(authenticationStateIcon),
    usage:
      'import { AuthenticationStateIcon } from "@stateglyph/react";\n\n<AuthenticationStateIcon state="signed-out" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <AuthenticationStateIcon
        state={state as ComponentProps<typeof AuthenticationStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "theme",
    name: themeStateIcon.title,
    componentName: "ThemeStateIcon",
    category: "Appearance",
    source: "Lucide",
    license: themeStateIcon.source.license,
    description: themeStateIcon.description,
    keywords: themeStateIcon.tags,
    states: toStateRecords(themeStateIcon),
    usage:
      'import { ThemeStateIcon } from "@stateglyph/react";\n\n<ThemeStateIcon state="light" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ThemeStateIcon
        state={state as ComponentProps<typeof ThemeStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "brightness",
    name: brightnessStateIcon.title,
    componentName: "BrightnessStateIcon",
    category: "Appearance",
    source: "Lucide",
    license: brightnessStateIcon.source.license,
    description: brightnessStateIcon.description,
    keywords: brightnessStateIcon.tags,
    states: toStateRecords(brightnessStateIcon),
    usage:
      'import { BrightnessStateIcon } from "@stateglyph/react";\n\n<BrightnessStateIcon state="low" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <BrightnessStateIcon
        state={state as ComponentProps<typeof BrightnessStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "contrast",
    name: contrastStateIcon.title,
    componentName: "ContrastStateIcon",
    category: "Appearance",
    source: "Lucide",
    license: contrastStateIcon.source.license,
    description: contrastStateIcon.description,
    keywords: contrastStateIcon.tags,
    states: toStateRecords(contrastStateIcon),
    usage:
      'import { ContrastStateIcon } from "@stateglyph/react";\n\n<ContrastStateIcon state="standard" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ContrastStateIcon
        state={state as ComponentProps<typeof ContrastStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "tool",
    name: toolStateIcon.title,
    componentName: "ToolStateIcon",
    category: "Editing tools",
    source: "Lucide",
    license: toolStateIcon.source.license,
    description: toolStateIcon.description,
    keywords: toolStateIcon.tags,
    states: toStateRecords(toolStateIcon),
    usage:
      'import { ToolStateIcon } from "@stateglyph/react";\n\n<ToolStateIcon state="select" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ToolStateIcon
        state={state as ComponentProps<typeof ToolStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "text-format",
    name: textFormatStateIcon.title,
    componentName: "TextFormatStateIcon",
    category: "Editing tools",
    source: "Lucide",
    license: textFormatStateIcon.source.license,
    description: textFormatStateIcon.description,
    keywords: textFormatStateIcon.tags,
    states: toStateRecords(textFormatStateIcon),
    usage:
      'import { TextFormatStateIcon } from "@stateglyph/react";\n\n<TextFormatStateIcon state="regular" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <TextFormatStateIcon
        state={state as ComponentProps<typeof TextFormatStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "alignment",
    name: alignmentStateIcon.title,
    componentName: "AlignmentStateIcon",
    category: "Editing tools",
    source: "Lucide",
    license: alignmentStateIcon.source.license,
    description: alignmentStateIcon.description,
    keywords: alignmentStateIcon.tags,
    states: toStateRecords(alignmentStateIcon),
    usage:
      'import { AlignmentStateIcon } from "@stateglyph/react";\n\n<AlignmentStateIcon state="start" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <AlignmentStateIcon
        state={state as ComponentProps<typeof AlignmentStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "folder",
    name: folderStateIcon.title,
    componentName: "FolderStateIcon",
    category: "Files and folders",
    source: "Lucide",
    license: folderStateIcon.source.license,
    description: folderStateIcon.description,
    keywords: folderStateIcon.tags,
    states: toStateRecords(folderStateIcon),
    usage:
      'import { FolderStateIcon } from "@stateglyph/react";\n\n<FolderStateIcon state="closed" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <FolderStateIcon
        state={state as ComponentProps<typeof FolderStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "file-access",
    name: fileAccessStateIcon.title,
    componentName: "FileAccessStateIcon",
    category: "Files and folders",
    source: "Lucide",
    license: fileAccessStateIcon.source.license,
    description: fileAccessStateIcon.description,
    keywords: fileAccessStateIcon.tags,
    states: toStateRecords(fileAccessStateIcon),
    usage:
      'import { FileAccessStateIcon } from "@stateglyph/react";\n\n<FileAccessStateIcon state="private" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <FileAccessStateIcon
        state={state as ComponentProps<typeof FileAccessStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "archive",
    name: archiveStateIcon.title,
    componentName: "ArchiveStateIcon",
    category: "Files and folders",
    source: "Lucide",
    license: archiveStateIcon.source.license,
    description: archiveStateIcon.description,
    keywords: archiveStateIcon.tags,
    states: toStateRecords(archiveStateIcon),
    usage:
      'import { ArchiveStateIcon } from "@stateglyph/react";\n\n<ArchiveStateIcon state="unpacked" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ArchiveStateIcon
        state={state as ComponentProps<typeof ArchiveStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "link",
    name: linkStateIcon.title,
    componentName: "LinkStateIcon",
    category: "Files and folders",
    source: "Lucide",
    license: linkStateIcon.source.license,
    description: linkStateIcon.description,
    keywords: linkStateIcon.tags,
    states: toStateRecords(linkStateIcon),
    usage:
      'import { LinkStateIcon } from "@stateglyph/react";\n\n<LinkStateIcon state="connected" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <LinkStateIcon
        state={state as ComponentProps<typeof LinkStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "weather",
    name: weatherStateIcon.title,
    componentName: "WeatherStateIcon",
    category: "Weather and time",
    source: "Lucide",
    license: weatherStateIcon.source.license,
    description: weatherStateIcon.description,
    keywords: weatherStateIcon.tags,
    states: toStateRecords(weatherStateIcon),
    usage:
      'import { WeatherStateIcon } from "@stateglyph/react";\n\n<WeatherStateIcon state="sunny" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <WeatherStateIcon
        state={state as ComponentProps<typeof WeatherStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "daylight",
    name: daylightStateIcon.title,
    componentName: "DaylightStateIcon",
    category: "Weather and time",
    source: "Lucide",
    license: daylightStateIcon.source.license,
    description: daylightStateIcon.description,
    keywords: daylightStateIcon.tags,
    states: toStateRecords(daylightStateIcon),
    usage:
      'import { DaylightStateIcon } from "@stateglyph/react";\n\n<DaylightStateIcon state="dawn" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <DaylightStateIcon
        state={state as ComponentProps<typeof DaylightStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "temperature",
    name: temperatureStateIcon.title,
    componentName: "TemperatureStateIcon",
    category: "Weather and time",
    source: "Lucide",
    license: temperatureStateIcon.source.license,
    description: temperatureStateIcon.description,
    keywords: temperatureStateIcon.tags,
    states: toStateRecords(temperatureStateIcon),
    usage:
      'import { TemperatureStateIcon } from "@stateglyph/react";\n\n<TemperatureStateIcon state="cold" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <TemperatureStateIcon
        state={state as ComponentProps<typeof TemperatureStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "task",
    name: taskStateIcon.title,
    componentName: "TaskStateIcon",
    category: "Productivity",
    source: "Lucide",
    license: taskStateIcon.source.license,
    description: taskStateIcon.description,
    keywords: taskStateIcon.tags,
    states: toStateRecords(taskStateIcon),
    usage:
      'import { TaskStateIcon } from "@stateglyph/react";\n\n<TaskStateIcon state="todo" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <TaskStateIcon
        state={state as ComponentProps<typeof TaskStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "priority",
    name: priorityStateIcon.title,
    componentName: "PriorityStateIcon",
    category: "Productivity",
    source: "Lucide",
    license: priorityStateIcon.source.license,
    description: priorityStateIcon.description,
    keywords: priorityStateIcon.tags,
    states: toStateRecords(priorityStateIcon),
    usage:
      'import { PriorityStateIcon } from "@stateglyph/react";\n\n<PriorityStateIcon state="low" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <PriorityStateIcon
        state={state as ComponentProps<typeof PriorityStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "pin",
    name: pinStateIcon.title,
    componentName: "PinStateIcon",
    category: "Productivity",
    source: "Lucide",
    license: pinStateIcon.source.license,
    description: pinStateIcon.description,
    keywords: pinStateIcon.tags,
    states: toStateRecords(pinStateIcon),
    usage:
      'import { PinStateIcon } from "@stateglyph/react";\n\n<PinStateIcon state="unpinned" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <PinStateIcon
        state={state as ComponentProps<typeof PinStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "upload",
    name: uploadStateIcon.title,
    componentName: "UploadStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: uploadStateIcon.source.license,
    description: uploadStateIcon.description,
    keywords: uploadStateIcon.tags,
    states: toStateRecords(uploadStateIcon),
    usage:
      'import { UploadStateIcon } from "@stateglyph/react";\n\n<UploadStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <UploadStateIcon
        state={state as ComponentProps<typeof UploadStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "download",
    name: downloadStateIcon.title,
    componentName: "DownloadStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: downloadStateIcon.source.license,
    description: downloadStateIcon.description,
    keywords: downloadStateIcon.tags,
    states: toStateRecords(downloadStateIcon),
    usage:
      'import { DownloadStateIcon } from "@stateglyph/react";\n\n<DownloadStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <DownloadStateIcon
        state={state as ComponentProps<typeof DownloadStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "save",
    name: saveStateIcon.title,
    componentName: "SaveStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: saveStateIcon.source.license,
    description: saveStateIcon.description,
    keywords: saveStateIcon.tags,
    states: toStateRecords(saveStateIcon),
    usage:
      'import { SaveStateIcon } from "@stateglyph/react";\n\n<SaveStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <SaveStateIcon
        state={state as ComponentProps<typeof SaveStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "delete",
    name: deleteStateIcon.title,
    componentName: "DeleteStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: deleteStateIcon.source.license,
    description: deleteStateIcon.description,
    keywords: deleteStateIcon.tags,
    states: toStateRecords(deleteStateIcon),
    usage:
      'import { DeleteStateIcon } from "@stateglyph/react";\n\n<DeleteStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <DeleteStateIcon
        state={state as ComponentProps<typeof DeleteStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "refresh",
    name: refreshStateIcon.title,
    componentName: "RefreshStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: refreshStateIcon.source.license,
    description: refreshStateIcon.description,
    keywords: refreshStateIcon.tags,
    states: toStateRecords(refreshStateIcon),
    usage:
      'import { RefreshStateIcon } from "@stateglyph/react";\n\n<RefreshStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <RefreshStateIcon
        state={state as ComponentProps<typeof RefreshStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "sync",
    name: syncStateIcon.title,
    componentName: "SyncStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: syncStateIcon.source.license,
    description: syncStateIcon.description,
    keywords: syncStateIcon.tags,
    states: toStateRecords(syncStateIcon),
    usage:
      'import { SyncStateIcon } from "@stateglyph/react";\n\n<SyncStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <SyncStateIcon
        state={state as ComponentProps<typeof SyncStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "send",
    name: sendStateIcon.title,
    componentName: "SendStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: sendStateIcon.source.license,
    description: sendStateIcon.description,
    keywords: sendStateIcon.tags,
    states: toStateRecords(sendStateIcon),
    usage:
      'import { SendStateIcon } from "@stateglyph/react";\n\n<SendStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <SendStateIcon
        state={state as ComponentProps<typeof SendStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "payment",
    name: paymentStateIcon.title,
    componentName: "PaymentStateIcon",
    category: "Commerce",
    source: "Lucide",
    license: paymentStateIcon.source.license,
    description: paymentStateIcon.description,
    keywords: paymentStateIcon.tags,
    states: toStateRecords(paymentStateIcon),
    usage:
      'import { PaymentStateIcon } from "@stateglyph/react";\n\n<PaymentStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <PaymentStateIcon
        state={state as ComponentProps<typeof PaymentStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "add-to-cart",
    name: addToCartStateIcon.title,
    componentName: "AddToCartStateIcon",
    category: "Commerce",
    source: "Lucide",
    license: addToCartStateIcon.source.license,
    description: addToCartStateIcon.description,
    keywords: addToCartStateIcon.tags,
    states: toStateRecords(addToCartStateIcon),
    usage:
      'import { AddToCartStateIcon } from "@stateglyph/react";\n\n<AddToCartStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <AddToCartStateIcon
        state={state as ComponentProps<typeof AddToCartStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "submit",
    name: submitStateIcon.title,
    componentName: "SubmitStateIcon",
    category: "Form states",
    source: "Lucide",
    license: submitStateIcon.source.license,
    description: submitStateIcon.description,
    keywords: submitStateIcon.tags,
    states: toStateRecords(submitStateIcon),
    usage:
      'import { SubmitStateIcon } from "@stateglyph/react";\n\n<SubmitStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <SubmitStateIcon
        state={state as ComponentProps<typeof SubmitStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "install",
    name: installStateIcon.title,
    componentName: "InstallStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: installStateIcon.source.license,
    description: installStateIcon.description,
    keywords: installStateIcon.tags,
    states: toStateRecords(installStateIcon),
    usage:
      'import { InstallStateIcon } from "@stateglyph/react";\n\n<InstallStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <InstallStateIcon
        state={state as ComponentProps<typeof InstallStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "publish",
    name: publishStateIcon.title,
    componentName: "PublishStateIcon",
    category: "Async workflows",
    source: "Lucide",
    license: publishStateIcon.source.license,
    description: publishStateIcon.description,
    keywords: publishStateIcon.tags,
    states: toStateRecords(publishStateIcon),
    usage:
      'import { PublishStateIcon } from "@stateglyph/react";\n\n<PublishStateIcon state="draft" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <PublishStateIcon
        state={state as ComponentProps<typeof PublishStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "play-pause",
    name: playPauseStateIcon.title,
    componentName: "PlayPauseStateIcon",
    category: "Media controls",
    source: "Lucide",
    license: playPauseStateIcon.source.license,
    description: playPauseStateIcon.description,
    keywords: playPauseStateIcon.tags,
    states: toStateRecords(playPauseStateIcon),
    usage:
      'import { PlayPauseStateIcon } from "@stateglyph/react";\n\n<PlayPauseStateIcon state="paused" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <PlayPauseStateIcon
        state={state as ComponentProps<typeof PlayPauseStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "playback",
    name: playbackStateIcon.title,
    componentName: "PlaybackStateIcon",
    category: "Media controls",
    source: "Lucide",
    license: playbackStateIcon.source.license,
    description: playbackStateIcon.description,
    keywords: playbackStateIcon.tags,
    states: toStateRecords(playbackStateIcon),
    usage:
      'import { PlaybackStateIcon } from "@stateglyph/react";\n\n<PlaybackStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <PlaybackStateIcon
        state={state as ComponentProps<typeof PlaybackStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "volume",
    name: volumeStateIcon.title,
    componentName: "VolumeStateIcon",
    category: "Media controls",
    source: "Lucide",
    license: volumeStateIcon.source.license,
    description: volumeStateIcon.description,
    keywords: volumeStateIcon.tags,
    states: toStateRecords(volumeStateIcon),
    usage:
      'import { VolumeStateIcon } from "@stateglyph/react";\n\n<VolumeStateIcon state="audible" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <VolumeStateIcon
        state={state as ComponentProps<typeof VolumeStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "microphone",
    name: microphoneStateIcon.title,
    componentName: "MicrophoneStateIcon",
    category: "Media controls",
    source: "Lucide",
    license: microphoneStateIcon.source.license,
    description: microphoneStateIcon.description,
    keywords: microphoneStateIcon.tags,
    states: toStateRecords(microphoneStateIcon),
    usage:
      'import { MicrophoneStateIcon } from "@stateglyph/react";\n\n<MicrophoneStateIcon state="active" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <MicrophoneStateIcon
        state={state as ComponentProps<typeof MicrophoneStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "camera",
    name: cameraStateIcon.title,
    componentName: "CameraStateIcon",
    category: "Media controls",
    source: "Lucide",
    license: cameraStateIcon.source.license,
    description: cameraStateIcon.description,
    keywords: cameraStateIcon.tags,
    states: toStateRecords(cameraStateIcon),
    usage:
      'import { CameraStateIcon } from "@stateglyph/react";\n\n<CameraStateIcon state="active" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <CameraStateIcon
        state={state as ComponentProps<typeof CameraStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "fullscreen",
    name: fullscreenStateIcon.title,
    componentName: "FullscreenStateIcon",
    category: "Media controls",
    source: "Lucide",
    license: fullscreenStateIcon.source.license,
    description: fullscreenStateIcon.description,
    keywords: fullscreenStateIcon.tags,
    states: toStateRecords(fullscreenStateIcon),
    usage:
      'import { FullscreenStateIcon } from "@stateglyph/react";\n\n<FullscreenStateIcon state="windowed" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <FullscreenStateIcon
        state={state as ComponentProps<typeof FullscreenStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "repeat",
    name: repeatStateIcon.title,
    componentName: "RepeatStateIcon",
    category: "Media controls",
    source: "Lucide",
    license: repeatStateIcon.source.license,
    description: repeatStateIcon.description,
    keywords: repeatStateIcon.tags,
    states: toStateRecords(repeatStateIcon),
    usage:
      'import { RepeatStateIcon } from "@stateglyph/react";\n\n<RepeatStateIcon state="off" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <RepeatStateIcon
        state={state as ComponentProps<typeof RepeatStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "shuffle",
    name: shuffleStateIcon.title,
    componentName: "ShuffleStateIcon",
    category: "Media controls",
    source: "Lucide",
    license: shuffleStateIcon.source.license,
    description: shuffleStateIcon.description,
    keywords: shuffleStateIcon.tags,
    states: toStateRecords(shuffleStateIcon),
    usage:
      'import { ShuffleStateIcon } from "@stateglyph/react";\n\n<ShuffleStateIcon state="off" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ShuffleStateIcon
        state={state as ComponentProps<typeof ShuffleStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "menu",
    name: menuStateIcon.title,
    componentName: "MenuStateIcon",
    category: "Navigation and layout",
    source: "Lucide",
    license: menuStateIcon.source.license,
    description: menuStateIcon.description,
    keywords: menuStateIcon.tags,
    states: toStateRecords(menuStateIcon),
    usage:
      'import { MenuStateIcon } from "@stateglyph/react";\n\n<MenuStateIcon state="closed" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <MenuStateIcon
        state={state as ComponentProps<typeof MenuStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "expand",
    name: expandStateIcon.title,
    componentName: "ExpandStateIcon",
    category: "Navigation and layout",
    source: "Lucide",
    license: expandStateIcon.source.license,
    description: expandStateIcon.description,
    keywords: expandStateIcon.tags,
    states: toStateRecords(expandStateIcon),
    usage:
      'import { ExpandStateIcon } from "@stateglyph/react";\n\n<ExpandStateIcon state="collapsed" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ExpandStateIcon
        state={state as ComponentProps<typeof ExpandStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "sidebar",
    name: sidebarStateIcon.title,
    componentName: "SidebarStateIcon",
    category: "Navigation and layout",
    source: "Lucide",
    license: sidebarStateIcon.source.license,
    description: sidebarStateIcon.description,
    keywords: sidebarStateIcon.tags,
    states: toStateRecords(sidebarStateIcon),
    usage:
      'import { SidebarStateIcon } from "@stateglyph/react";\n\n<SidebarStateIcon state="open" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <SidebarStateIcon
        state={state as ComponentProps<typeof SidebarStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "view",
    name: viewStateIcon.title,
    componentName: "ViewStateIcon",
    category: "Navigation and layout",
    source: "Lucide",
    license: viewStateIcon.source.license,
    description: viewStateIcon.description,
    keywords: viewStateIcon.tags,
    states: toStateRecords(viewStateIcon),
    usage:
      'import { ViewStateIcon } from "@stateglyph/react";\n\n<ViewStateIcon state="grid" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ViewStateIcon
        state={state as ComponentProps<typeof ViewStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "chevron-vertical",
    name: chevronVerticalStateIcon.title,
    componentName: "ChevronVerticalStateIcon",
    category: "Navigation and layout",
    source: "Lucide",
    license: chevronVerticalStateIcon.source.license,
    description: chevronVerticalStateIcon.description,
    keywords: chevronVerticalStateIcon.tags,
    states: toStateRecords(chevronVerticalStateIcon),
    usage:
      'import { ChevronVerticalStateIcon } from "@stateglyph/react";\n\n<ChevronVerticalStateIcon state="down" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ChevronVerticalStateIcon
        state={
          state as ComponentProps<typeof ChevronVerticalStateIcon>["state"]
        }
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "chevron-horizontal",
    name: chevronHorizontalStateIcon.title,
    componentName: "ChevronHorizontalStateIcon",
    category: "Navigation and layout",
    source: "Lucide",
    license: chevronHorizontalStateIcon.source.license,
    description: chevronHorizontalStateIcon.description,
    keywords: chevronHorizontalStateIcon.tags,
    states: toStateRecords(chevronHorizontalStateIcon),
    usage:
      'import { ChevronHorizontalStateIcon } from "@stateglyph/react";\n\n<ChevronHorizontalStateIcon state="right" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <ChevronHorizontalStateIcon
        state={
          state as ComponentProps<typeof ChevronHorizontalStateIcon>["state"]
        }
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "panel",
    name: panelStateIcon.title,
    componentName: "PanelStateIcon",
    category: "Navigation and layout",
    source: "Lucide",
    license: panelStateIcon.source.license,
    description: panelStateIcon.description,
    keywords: panelStateIcon.tags,
    states: toStateRecords(panelStateIcon),
    usage:
      'import { PanelStateIcon } from "@stateglyph/react";\n\n<PanelStateIcon state="restored" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <PanelStateIcon
        state={state as ComponentProps<typeof PanelStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "copy",
    name: copyStateIcon.title,
    componentName: "CopyStateIcon",
    category: "Feedback and toggles",
    source: "Lucide",
    license: copyStateIcon.source.license,
    description: copyStateIcon.description,
    keywords: copyStateIcon.tags,
    states: toStateRecords(copyStateIcon),
    usage:
      'import { CopyStateIcon } from "@stateglyph/react";\n\n<CopyStateIcon state="idle" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <CopyStateIcon
        state={state as ComponentProps<typeof CopyStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "like",
    name: likeStateIcon.title,
    componentName: "LikeStateIcon",
    category: "Feedback and toggles",
    source: "Lucide",
    license: likeStateIcon.source.license,
    description: likeStateIcon.description,
    keywords: likeStateIcon.tags,
    states: toStateRecords(likeStateIcon),
    usage:
      'import { LikeStateIcon } from "@stateglyph/react";\n\n<LikeStateIcon state="unliked" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <LikeStateIcon
        state={state as ComponentProps<typeof LikeStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "bookmark",
    name: bookmarkStateIcon.title,
    componentName: "BookmarkStateIcon",
    category: "Feedback and toggles",
    source: "Lucide",
    license: bookmarkStateIcon.source.license,
    description: bookmarkStateIcon.description,
    keywords: bookmarkStateIcon.tags,
    states: toStateRecords(bookmarkStateIcon),
    usage:
      'import { BookmarkStateIcon } from "@stateglyph/react";\n\n<BookmarkStateIcon state="unbookmarked" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <BookmarkStateIcon
        state={state as ComponentProps<typeof BookmarkStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
  {
    slug: "notification",
    name: notificationStateIcon.title,
    componentName: "NotificationStateIcon",
    category: "Notifications",
    source: "Lucide",
    license: notificationStateIcon.source.license,
    description: notificationStateIcon.description,
    keywords: notificationStateIcon.tags,
    states: toStateRecords(notificationStateIcon),
    usage:
      'import { NotificationStateIcon } from "@stateglyph/react";\n\n<NotificationStateIcon state="off" decorative />',
    render: ({ state, size, className }: RenderIconOptions) => (
      <NotificationStateIcon
        state={state as ComponentProps<typeof NotificationStateIcon>["state"]}
        size={size}
        strokeWidth={1.65}
        decorative
        className={className}
      />
    ),
  },
] as const satisfies readonly IconRecord[];
// Curated for common interface controls; not a usage analytics ranking.
const iconPriority: readonly string[] = [
  "menu",
  "play-pause",
  "copy",
  "like",
  "bookmark",
  "theme",
  "notification",
  "volume",
  "visibility",
  "lock",
  "upload",
  "download",
  "save",
  "wifi",
  "chevron-vertical",
  "chevron-horizontal",
];
const categoryPriority = [
  "Navigation and layout",
  "Media controls",
  "Feedback and toggles",
  "Connectivity",
  "Notifications",
  "Async workflows",
  "Security and privacy",
  "Productivity",
  "Commerce",
  "Form states",
  "Files and folders",
  "Appearance",
  "Editing tools",
  "Weather and time",
] as const;
function priority(slug: string) {
  const index = iconPriority.indexOf(slug);
  return index === -1 ? iconPriority.length : index;
}
export const iconCatalog = [...iconRecords].sort(
  (a, b) =>
    priority(a.slug) - priority(b.slug) ||
    categoryPriority.indexOf(a.category) - categoryPriority.indexOf(b.category),
);
export const iconCategories = categoryPriority.filter((category) =>
  iconCatalog.some((icon) => icon.category === category),
);
export function getIconBySlug(slug: string) {
  return iconCatalog.find((icon) => icon.slug === slug);
}
