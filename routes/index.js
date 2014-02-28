
/*
* GET home page.
*/

exports.index = function(req, res){
	res.render('index', 
		{
			"pagetitle": "Joey Hiller",
			"title": "Joey <br>Hiller",
			"name": "Letsgo.io",
			"description": "Your standard form button.",
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
					"caption": "Creating trips around great photos.",
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

exports.about = function(req, res){
  res.render('about', { title: 'About' });
};