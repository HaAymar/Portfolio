import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			contact: require("./en/contact/index.json"),
			experience: require("./en/experience/index.json"),
			home: require("./en/home/index.json"),
			navBar: require("./en/navBar/index.json"),
			projects: require("./en/projects/index.json"),
			skills: require("./en/skills/index.json"),
		},
		fr: {
			contact: require("./fr/contact/index.json"),
			experience: require("./fr/experience/index.json"),
			home: require("./fr/home/index.json"),
			navBar: require("./fr/navBar/index.json"),
			projects: require("./fr/projects/index.json"),
			skills: require("./fr/skills/index.json"),
		},
	},
	lng: "fr",
	fallbackLng: "fr",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
