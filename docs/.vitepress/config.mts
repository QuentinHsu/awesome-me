import { defineConfig } from "vitepress";

import { SidebarECMAScript } from "./config/sidebar-ecma-script";
import { SidebarGit } from "./config/sidebar-git";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "👨‍💻",
  description: "人生本就過的不愉快 那就來點羅曼蒂克",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: {
      "ecma-script": { base: "/ecma-script/", items: SidebarECMAScript() },
      git: { base: "/git/", items: SidebarGit() },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/QuentinHsu" }],
  },
});
