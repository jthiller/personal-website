
/*
* GET home page.
*/

exports.index = function(req, res){
	res.render('index', 
		{
			"home": true,
			"title": "Joey <br>Hiller",
			"backgroundgraphic": "/images/header_index.svg",
			"projects": [
				{ 
					"title": "New Portfolio",
					"caption": "A new website for a new year",
					"image": "/images/project/portfolio/projectImage.jpg",
					"link": "/portfolio/"
				},
				{ 
					"title": "Acme Made",
					"caption": "Products that speak style.",
					"subcaption": "Complete e-commerce on Magento core.",
					"image": "/images/project/acmemade/projectImage.jpg",
					"link": "/acmemade/"
				},
				{ 
					"title": "LetsGo.io",
					"caption": "Creating trips around great photos.",
					"subcaption": "1st Place hackathon project.<br>Photo Hack Day 4",
					"image": "/images/project/letsgoio/projectImage.jpg",
					"link": "/letsgoio/"
				},
				{ 
					"title": "GorillaCam",
					"caption": "JOBY's photography app for iPhone",
					// "subcaption": "1st Place hackathon project.<br>Photo Hack Day 4",
					"image": "/images/project/gorillacam/projectImage.jpg",
					"link": "/gorillacam/"
				}
			],
			"markup": {
				"example": "<button>This is a button</button>",
				"escaped": "&lt;button&gt;This is a button&lt;/button&gt;"
			}
		}
	);
};

exports.about = function(req, res){
	res.render('index',
		{
			"about": true,
			"pagetitle": "About" ,
			"title": "About<br>Joey Hiller",
			"backgroundgraphic": "/images/header_index.svg",
			"aboutcontent": [
				{
					"sectiontitle": "Who's this guy?",
					"content": "Throughout grade school I was very focused on science, math, and technology. As I graduated into university, I followed the path of an engineering degree until two years later I found a supreme lack of creativity in my life. At that point I shifted my focus 180 degrees to pursue a degree in studio art. My school had a fantastic program for both engineering and art, and I feel I was able to extract the best of both disciplines. I was also likely one of just a few in the history of my school to graduate with an art degree emphasizing in photography and graphic design <em>as well</em> as decent understanding of calculus, chemistry, programming, and mechanics."
				},
				{
					"content": "The disciplines combined put me in a unique position when I moved to San Francisco immediately after graduation. When I moved I was not aware of the demand for the ‘web hybrid’. I took an internship as a designer, but my skill for code was quickly realized. Tasks quickly shifted from, &#8220;Make me some banner ads&#8221; to &#8220;Let’s completely redo our iPhone app” or, “Let’s try something drastically cutting edge for this new product launch&#8221;. It was only a short time until I signed on as a full-time employee. Since that time I’ve redesigned entire e-commerce platforms and built out special elements to promote and sell my company’s products."
				},
				{
					"image": "/images/mebirds.gif",
					"imagealt": "Me chasing birds at Avila Beach near San Luis Obispo",
					"scalable": false,
					"caption": true
				},
				{
					"sectiontitle": "Site Details",
					"content": "When I approach a redesign of my own portfolio, I take it as an opportunity to learn as many new topics as possible as well as create something that feels ‘new’ to the internet. This time around, I took the opportunity to explore Node.js. I’ve had limited experience with Node on a second-hand basis in the past; both of the winning hackathon projects I worked on operated via a Node backend.<br>You can learn more about the tech and process behind this site within the case study <a href='/portfolio/'>Portfolio 2014</a>."
				},
				{
					"sectiontitle": "Contact",
					"content": "Find me on just about any social network.<br>Here are a few links to make it easy.<br><a href='https://twitter.com/jhiller'>Twitter</a><br><a href='https://www.facebook.com/joeyhiller'>Facebook</a><br><a href='http://instagram.com/joeyhiller'>Instagram</a><br><a href='http://codepen.io/jthiller/'>Codepen</a><br><a href='https://www.linkedin.com/pub/joey-hiller/b/116/460'>LinkedIn</a>"
				}
			]
		}
	);
};




exports.blog = function(req, res){
	res.render('index',
		{
			"blog": true,
			"pagetitle": "Blog" ,
			"title": "Blog",
			"backgroundgraphic": "/images/header_japan.svg",
			"aboutcontent": [
				{
					"sectiontitle": "Blog coming soon.",
				}
			]
		}
	);
};