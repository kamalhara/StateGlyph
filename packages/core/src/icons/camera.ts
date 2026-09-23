import { defineStateIcon } from "../define-state-icon";

export const cameraStateIcon = defineStateIcon({
  id: "camera",
  title: "Camera",
  description: "Switches between active and disabled camera states.",
  category: "media",
  states: {
    active: {
      icon: "video",
      label: "Disable camera",
      description: "The camera is active.",
    },
    disabled: {
      icon: "video-off",
      label: "Enable camera",
      description: "The camera is disabled.",
    },
  },
  initialState: "active",
  transition: "morph",
  tags: ["camera", "active", "disabled"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["video", "video-off"],
  },
});

export type CameraState = keyof typeof cameraStateIcon.states;
