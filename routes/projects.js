exports.acmemade = function(req, res){
	res.render('index',
		{
			"pagetitle": "AcmeMade",
			"title": "AcmeMade",
			"backgroundgraphic": "/images/header_acmemade.svg",
			"projectcontent": [
				{
					"sectiontitle": "At Home With Design: AcmeMade & San&nbsp;Francisco",
					"content": "One of the most picturesque cities in the world, San Francisco is an area packed with inspiration. Founded in 2002, AcmeMade flourishes in this 7x7 square mile city of innovation and culture. Understanding the city, the distinct look of its people and the activities they enjoy, is how AcmeMade draws its product ideas. From photographing sunsets at the beach or reading on the pier, to working in the park or racing in a morning commute - inspiration is available at every turn."
				},
				{
					"content": "AcmeMade’s design center in San Francisco is where these inspirations turn into great products - each designed to protect your gear and complement your personality and style. "
				},
				{
					"content": "Vibrant thoroughfares and neighborhoods such as Noe Valley, Fillmore Street, Montgomery Street, Oak Street, and Bay Street inspire the AcmeMade design group to create products that reflect a love of technology and style."
				},
				{
					"image": "/images/project/acmemade/SkinnySleeveHome.jpg",
					"imagealt": "The AcmeMade Skinny Sleeve",
					"scalable": true,
					"caption": true
				},
				{
					"sectiontitle": "Part One",
					"content": "In approaching the AcmeMade redesign, I wanted to showcase the brand's style through the eyes of the target consumer as well as that of the designer. I had the benefit of sitting next to Luis Quehl (the brand’s primary designer) while I was an intern, so I had a decent familiarity with the brand’s core. Luis had the flexibility to build the brand around his vision of what a stylish tablet sleeve or camera backpack should look like; minimalist, clean, and simple. As this extension of Luis, AcmeMade saw that a camera bag wasn't solely about the gear but about fashion and the person wearing it."
				},
				{
					"image": "/images/project/acmemade/projectImage.jpg",
					"imagealt": "Late-stage AcmeMade sketches.",
					"scalable": true,
					"caption": true
				},
				{
					"content": "&nbsp;"
				}
			]
		}
	);
};


exports.portfolio = function(req, res){
	res.render('index',
		{
			"pagetitle": "New Portfolio",
			"title": "Portfolio<br>Redesign",
			// "backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projectcontent": [
				{
					"sectiontitle": "Redesign 2014",
					"content": "Whenever I approach a redesign of my portfolio, I like to turn it into a wishlist of things I'd like to learn or see. It has been over five years since I last did a redesign, and the web world had changed a lot since then."
				},
				{
					"image": "/images/project/portfolio/projectImage.jpg",
					"imagealt": "A late sketch of the website's header.",
					"scalable": true,
					// "caption": true
				},
				{
					"image": "/images/project/portfolio/earlySketch.jpg",
					"imagealt": "An early sketch of the site.<br>The initial design was inspired by a trip to Tokyo",
					"scalable": true,
					"caption": true
				},
				// {
				// 	"type": "iframeContent",
				// 	"content": "<p data-height='300' data-theme-id='0' data-slug-hash='kraIu' data-default-tab='result' class='codepen'>See the Pen <a href='http://codepen.io/jthiller/pen/kraIu'>Animated ☰ to × Button</a> by Joey Hiller (<a href='http://codepen.io/jthiller'>@jthiller</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src='//codepen.io/assets/embed/ei.js'></script>"
				// },
				{
					"content": "The technical details of this site."
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
			// "backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projectcontent": [
				{
					// "sectiontitle": "",
					"content": "In June 2013 I attended Photo Hack Day 4 with one thought in mind. &#8220;<em>I won second at PHD3. It might be a little crazy, but I know I can do better.</em>&#8221;"
				},
				{
					"image": "http://placekitten.com/g/900/500",
					"imagealt": "Me a long time ago.",
					"link": ""
				},
				{
					"sectiontitle": "My Story",
					"content": "Even more words."
				},
				{
					"content": "The technical details of this site."
				}
			]
		}
	);
};
