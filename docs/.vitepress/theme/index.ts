// .vitepress/theme/index.js
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import ComponentDocBefore from "./components/doc-before.vue";
import "./custom.css";

export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			"doc-before": () => h(ComponentDocBefore),
		});
	},
};
