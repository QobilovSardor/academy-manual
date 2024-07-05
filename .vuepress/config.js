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
			{
				text: "PHP",
				link: "/php/",
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
						"12-lesson"
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
			"/php/": [
				{
					text: "PHP Tutorial",
					collapsible: true,
					children: [
						"/php/index.md",
						"/php/tutorial/kirish.md",
						"/php/tutorial/phpSyntax.md",
						"/php/tutorial/comment.md",
						"/php/tutorial/phpVariables.md",
						"/php/tutorial/phpEcho.md",
						"/php/tutorial/dataTypes.md",
						"/php/tutorial/phpNumbers.md",
						"/php/tutorial/phpStrings.md",
						"/php/tutorial/phpMath.md",
						"/php/tutorial/phpConstants",
						"/php/tutorial/phpOperators.md",
						"/php/tutorial/phpIfElse.md",
						"/php/tutorial/phpSwitch.md",
						"/php/tutorial/phpSikl.md",
						"/php/tutorial/phpFunctions.md",
						"/php/tutorial/phpArrays.md",
						"/php/tutorial/phpSuperGlobal.md",
						"/php/tutorial/phpRegx.md",
					],
				},
				{
					text: "PHP Forms",
					collapsible: true,
					children: [
						"/php/form/formHandling.md",
						"/php/form/formValidation.md",
						"/php/form/formRequired.md",
						"/php/form/formUrl.md",
						"/php/form/formComplate.md",
					],
				},
				{
					text: "PHP advanced",
					collapsible: true,
					children: [
						'/php/advanced/dateAndTime.md',
						'/php/advanced/include.md',
						'/php/advanced/fileHandling.md',
						'/php/advanced/fileOpenRead.md',
						'/php/advanced/fileCreateWrite.md',
						'/php/advanced/fileUpload.md',
						'/php/advanced/cookies.md',
						'/php/advanced/sessions.md',
						'/php/advanced/filters.md',
						'/php/advanced/filtersAdvanced.md',
						'/php/advanced/callbackFunctions.md',
						'/php/advanced/json.md',
						'/php/advanced/exentions.md',
					],
				},
				{
					text: "PHP OOP",
					collapsible: true,
					children: [
						'/php/oop/oop.md',
						'/php/oop/classObject.md',
						'/php/oop/constructor.md',
						'/php/oop/destructor.md',
						'/php/oop/accessModifiers.md',
						'/php/oop/inheritance.md',
						'/php/oop/constants.md',
						'/php/oop/abstractClass.md',
						'/php/oop/interfaces.md',
						'/php/oop/traits.md',
						'/php/oop/staticMethods.md',
						'/php/oop/staticProperties.md',
						'/php/oop/namespace.md',
						'/php/oop/iterables.md',
					],
				},
				{
					text: "MySQL Database",
					collapsible: true,
					children: [
						'/php/database/database.md',
						'/php/database/connect.md',
						'/php/database/createDb.md',
						'/php/database/createTable.md',
						'/php/database/insertData.md',
						'/php/database/getLastId.md',
						'/php/database/insertMultiple.md',
						'/php/database/prepared.md',
						'/php/database/selectData.md',
						'/php/database/where.md',
						'/php/database/orderBy.md',
						'/php/database/deleteData.md',
						'/php/database/updateData.md',
						'/php/database/limitData.md',
					],
				},
				{
					text: "PHP XML",
					collapsible: true,
					children: [
						'/php/xml/xmlParsers.md',
						'/php/xml/parser.md',
						'/php/xml/get.md',
						'/php/xml/expat.md',
						'/php/xml/dom.md',
					],
				},
				{
					text: "PHP - AJAX",
					collapsible: true,
					children: [
						'/php/ajax/intro.md',
						'/php/ajax/php.md',
						'/php/ajax/database.md',
						'/php/ajax/xml.md',
						'/php/ajax/liveSearch.md',
						'/php/ajax/poll.md',
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
