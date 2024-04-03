import { DefaultTheme } from "vitepress";

export function SidebarECMAScript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ECMAScript",
      items: [{ text: "Debounce Throttle", link: "/debounce-throttle" }],
    },
  ];
}
