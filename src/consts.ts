// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = "Game Template";

export const SITE_DESCRIPTION: string | Multilingual = {
	en: "A starter template for Astro with i18n support.",
	es: "Una plantilla inicial para Astro con soporte i18n.",
	ar: "قالب بداية لـ Astro مع دعم i18n.",
	pt: "Um modelo inicial para Astro com suporte i18n.",
	fr: "Un modèle de démarrage pour Astro avec support i18n.",
	ru: "Стартовый шаблон для Astro с поддержкой i18n.",
	"zh-cn": "具有 i18n 支持的 Astro 入门模板。",
	ja: "i18n 対応の Astro スターターテンプレート。",
};

export const X_ACCOUNT: string | Multilingual = "@psephopaiktes";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
	en: "This page is not available in your language.",
	es: "Esta página no está disponible en tu idioma.",
	ar: "هذه الصفحة غير متوفرة بلغتك.",
	pt: "Esta página não está disponível no seu idioma.",
	fr: "Cette page n'est pas disponible dans votre langue.",
	ru: "Эта страница недоступна на вашем языке.",
	"zh-cn": "此页面不支持您的语言。",
	ja: "このページはご利用の言語でご覧いただけません。",
};
