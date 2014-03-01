
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
					"content": "To fit me into a cliche, I'm the country kid who's working his ass off to make it in the big city.<br>More words..."
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