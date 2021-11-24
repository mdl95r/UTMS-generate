const platforms = {
	google: {
		utm_source: "google",
		utm_medium: "cpc",
		utm_campaign: "{network}",
		utm_campaign_desc: "Вместо {network} Google Adwords подставит 'g' (поиск), 's' (поисковый партнер) или 'd' (КМС)",
		utm_content: "{creative}",
		utm_content_desc: "Вместо {creative} Google Adwords автоматически подставит ID объявления",
		utm_term: "{keyword}",
		utm_term_desc: "Вместо {keyword} Google Adwords автоматически подставит ключевое слово",
	},
	yandex: {
		utm_source: "yandex",
		utm_medium: "cpc",
		utm_campaign: "{campaign_id}",
		utm_campaign_desc: "Вместо {campaign_id} Яндекс.Директ автоматически подставит ID кампании",
		utm_content: "{ad_id}",
		utm_content_desc: "Вместо {ad_id} Яндекс.Директ автоматически подставит ID объявления",
		utm_term: "{keyword}",
		utm_term_desc: "Вместо {keyword} Яндекс.Директ автоматически подставит ключевое слово",
	},
	vk: {
		utm_source: "vkontakte",
		utm_medium: "cpc",
		utm_campaign: "{campaign_id}",
		utm_campaign_desc: "Вместо {campaign_id} Вконтакте автоматически подставит ID объявления",
		utm_content: "{ad_id}",
		utm_content_desc: "Вместо {ad_id} Вконтакте автоматически подставит ID объявления",
		utm_term: "",
		utm_term_desc: null

	},
	fb: {
		utm_source: "facebook",
		utm_medium: "cpc",
		utm_content: "",
		utm_content_desc: null,
		utm_term: "",
		utm_term_desc: null,
		utm_campaign: "promo",
		utm_campaign_desc: null
	}
}

export default platforms