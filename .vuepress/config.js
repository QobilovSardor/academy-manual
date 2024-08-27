import { defineUserConfig, defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
	lang: "en-US",
	title: "Sadi Dev",
	description: "Just playing around",
	theme: defaultTheme({
		navbar: [
			{
				text: "HTML",
				link: "/html/",
			},
			{
				text: "CSS",
				link: "/css/",
			},
			{
				text: "Bootstrap",
				link: "/bootstrap/",
			},
			{
				text: "SASS",
				link: "/sass/",
			},
			{
				text: "JS",
				link: "/js/",
			},
			{
				text: "ReactJS",
				link: "/reactjs/",
			},
			{
				text: "Redux",
				link: "/redux/",
			},
		],
		sidebar: {
			"/js/": [
				{
					text: "JS Reference",
					collapsible: false,
					children: [
						"index.md",
						"1-dars",
						"2-dars",
						"3-dars",
						"4-dars",
						"5-dars",
						"6-dars",
						"7-dars",
						"8-dars",
						"9-dars",
						"10-dars",
						"11-dars",
						"12-dars",
						"13-dars",
						"14-dars",
						"15-dars",
						"16-dars",
						"17-dars",
						"18-dars",
						"19-dars",
						"20-dars",
						"21-dars",
						"22-dars",
					],
				},
			],
			"/reactjs/": [
				{
					text: "ReactJS",
					collapsible: false,
					children: [
						"index.md",
						"1-dars",
						"2-dars",
						"3-dars",
						"4-dars",
						"5-dars",
						"6-dars",
						"7-dars",
						"8-dars",
						"9-dars",
						"10-dars",
						"11-dars",
						"12-dars",
						"13-dars",
						"14-dars",
						"15-dars",
						"16-dars",
						"17-dars",
						"18-dars",
						"19-dars",
					],
				},
			],
			"/redux/": [
				{
					text: "redux",
					collapsible: false,
					children: ["index.md"],
				},
			],
			"/html/": [
				{
					text: "HTML",
					collapsible: false,
					children: [
						"introduction",
						"kirish",
						"1-lesson",
						"2-lesson",
						"3-lesson",
						"4-lesson",
						"5-lesson",
						"6-lesson",
						"7-lesson",
					],
				},
			],
			"/css/": [
				{
					text: "CSS",
					collapsible: false,
					children: [
						"introduction",
						"1-lesson",
						"2-lesson",
						"3-lesson",
						"4-lesson",
						"5-lesson",
						"6-lesson",
						"7-lesson",
						"8-lesson",
						"9-lesson",
						"10-lesson",
						"11-lesson",
						"12-lesson",
						"Media-query",
					],
				},
			],
			"/bootstrap/": [
				{
					text: "Bootstrap",
					collapsible: false,
					children: [
						"1-lesson",
						"2-lesson",
						"3-lesson",
						"4-lesson",
						"5-lesson",
						"6-lesson",
						"7-lesson",
						"8-lesson",
						"9-lesson",
						"10-lesson",
						"11-lesson",
						"12-lesson"
					],
				},
			],
			"/sass/": [
				{
					text: "SASS",
					collapsible: false,
					children: [
						"Introduction",
						"Variables",
						"Nesting",
						"Import",
						"Mixin",
						// "extend.md"
					],
				},
			],

		},
	}),
	plugins: [
		docsearchPlugin({
			appId: "<APP_ID>",
			apiKey: "<API_KEY>",
			indexName: "<INDEX_NAME>",
			locales: {
				"/": {
					placeholder: "Search Documentation",
					translations: {
						button: {
							buttonText: "Search Documentation",
						},
					},
				},
				"/zh/": {
					placeholder: "搜索文档",
					translations: {
						button: {
							buttonText: "搜索文档",
						},
					},
				},
			},
		}),
	],
});
