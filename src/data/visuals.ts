import web from "../assets/generated/abstract-web-ecosystem.svg";
import mobile from "../assets/generated/mobile-app-interface.svg";
import branding from "../assets/generated/branding-posters.svg";
import video from "../assets/generated/video-editing-timeline.svg";
import merch from "../assets/generated/merchandise-mockup.svg";
import iot from "../assets/generated/iot-smart-system.svg";
import security from "../assets/generated/cybersecurity-shield.svg";
import studio from "../assets/generated/studio-grid.svg";

export const visuals = {
  web,
  mobile,
  branding,
  video,
  merch,
  iot,
  security,
  studio,
};

export function visualFor(value: string) {
  const key = value.toLowerCase();
  if (key.includes("mobile")) return mobile;
  if (key.includes("brand") || key.includes("poster")) return branding;
  if (key.includes("video") || key.includes("motion")) return video;
  if (key.includes("merch")) return merch;
  if (key.includes("iot") || key.includes("smart")) return iot;
  if (key.includes("security") || key.includes("cyber")) return security;
  return web;
}
