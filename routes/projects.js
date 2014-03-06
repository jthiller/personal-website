exports.portfolio = function(req, res){
	res.render('index', 
		{
			"pagetitle": "New Portfolio",
			"title": "Portfolio<br>Redesign",
			// "backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projectcontent": [
				// {
				// 	"headline": "Creating trips around great photos."
				// },
				{
					"sectiontitle": "Redesign 2014",
					"content": "In building my new portfolio..."
				},
				{
					"image": "/images/project/portfolio/projectImage.jpg",
					"imagealt": "words",
					"link": ""
				},
				{
					"image": "/images/project/portfolio/header_3d_900.jpg",
					"imagealt": "Layered sketch of page header."
				},
				{
					"content": "<p data-height='300' data-theme-id='0' data-slug-hash='kraIu' data-default-tab='result' class='codepen'>See the Pen <a href='http://codepen.io/jthiller/pen/kraIu'>Animated ☰ to × Button</a> by Joey Hiller (<a href='http://codepen.io/jthiller'>@jthiller</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src='//codepen.io/assets/embed/ei.js'></script>"
				},
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
				// {
				// 	"headline": "Creating trips around great photos."
				// },
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
					"sectiontitle": "My story",
					"content": "Even more words."
				},
				{
					"content": "The technical details of this site."
				}
			]
		}
	);
};

exports.acmemade = function(req, res){
	res.render('index', 
		{
			"pagetitle": "AcmeMade",
			"title": "AcmeMade",
			// "backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projectcontent": [
				{
					// "sectiontitle": "Redesign 2014",
					"content": "In approaching the AcmeMade redesign, I wanted to showcase the brand's style through the eyes of the target consumer.",
				},
				{
					"content": "I met with the product designers to gather a sense of the intention of the brand.",
				},
				{
					"image": "/images/project/acmemade/projectImage.jpg"
				}
			]
		}
	);
};