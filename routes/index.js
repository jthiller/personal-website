
/*
* GET home page.
*/

exports.index = function(req, res){
	res.render('index', 
		{
			"pagetitle": "Home",
			"title": "Joey <br>Hiller",
			"backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projects": [
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
			],
			"markup": {
				"example": "<button>This is a button</button>",
				"escaped": "&lt;button&gt;This is a button&lt;/button&gt;"
			}
		}
	);
};

// exports.footer = function(req, res){
// 	res.render('footer', { 'content' });
// };

exports.about = function(req, res){
	res.render('index',
		{
			"pagetitle": "About" ,
			"title": "About<br>Joey Hiller",
			"backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"aboutcontent": [
				{
					"sectiontitle": "Who's this guy?",
					"content": "Throughout grade school I was very focused on science, math, and technology. As I graduated into university, I followed the path of an engineering degree until two years later I found a supreme lack of creativity in my life. At that point I shifted my focus 180 degrees to pursue a degree in studio art. My school had a fantastic program for both engineering and art, and I feel I was able to extract the best of both disciplines. I was also likely one of just a few in the history of my school to graduate with an art degree emphasizing in photography and graphic design <em>as well</em> as decent understanding of calculus, chemistry, programming, and mechanics."
				},
				{
					"content": "The disciplines combined put me in a unique position when I moved to San Francisco immediately after graduation. When I moved I was not aware of the demand for the ‘web hybrid’. I took an internship as a designer, but my skill for code was quickly realized. Tasks quickly shifted from, &#8220;Make me some banner ads&#8221; to &#8220;Let’s completely redo our iPhone app.” or, “Let’s try something drastically cutting edge for this new product launch&#8221;. It was only a short time until I signed on as a full-time employee. Since that time I’ve redesigned entire ecommerce platforms and built out special elements to promote and sell my company’s products."
				},
				{
					"image": "http://placekitten.com/g/900/500",
					"imagealt": "Me a long time ago.",
					"link": ""
				},
				{
					"sectiontitle": "Site Details",
					"content": "When I approach a redesign of my own portfolio, I take it as an opportunity to learn as many new topics as possible as well as create something that feels ‘new’ to the internet. This time around, I took the opportunity to explore Node.js. I’ve had limited experience with Node on a second-hand basis in the past; both of the winning hackathon projects I worked on operated via a Node backend."
				}
			]
		}
	);
};