exports.portfolio = function(req, res){
	res.render('index', 
		{
			"pagetitle": "New Portfolio",
			"title": "Portfolio<br>Redesign",
			"projectcontent": [
				{
					"headline": "Creating trips around great photos."
				},
				{ 
					"title": "New Portfolio",
					"caption": "A new website for a new year",
					"image": "http://placekitten.com/900/500",
					"link": "/portfolio/"
				},
				{ 
					"title": "LetsGo.io",
					"caption": "Creating trips around great photos.",
					"subcaption": "1st Place hackathon project.<br>Photo Hack Day 4",
					"image": "http://placekitten.com/g/900/500",
					"link": "/letsgoio/"
				},
				{ 
					"title": "AcmeMade",
					"caption": "Products that speak style.",
					"subcaption": "Complete eCommerce on Magento core.",
					"image": "http://placekitten.com/900/500",
					"link": "/acmemade/"
				}
			]
		}
	);
};

exports.letsgoio = function(req, res){
	res.render('index', 
		{
			"pagetitle": "LetsGo.io",
			"title": "LetsGo.io",
			"projectcontent": [
				{
					"headline": "Creating trips around great photos."
				},
				{ 
					"title": "New Portfolio",
					"caption": "A new website for a new year",
					"image": "http://placekitten.com/900/500",
					"link": "/portfolio/"
				},
				{ 
					"title": "LetsGo.io",
					"caption": "Creating trips around great photos.",
					"subcaption": "1st Place hackathon project.<br>Photo Hack Day 4",
					"image": "http://placekitten.com/g/900/500",
					"link": "/letsgoio/"
				},
				{ 
					"title": "AcmeMade",
					"caption": "Products that speak style.",
					"subcaption": "Complete eCommerce on Magento core.",
					"image": "http://placekitten.com/900/500",
					"link": "/acmemade/"
				}
			]
		}
	);
};