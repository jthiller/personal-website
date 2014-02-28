
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
			"state": [
				{ 
					"name": ":hover",
					"escaped": "pseudo-class-hover",
					"description": "Highlights when hovering."
				},
				{
					"name": ":disabled",
					"escaped": "pseudo-class-disabled",
					"description": "Dims the button when disabled."
				},
				{
					"name": ".primary",
					"escaped": "primary",
					"description": "Indicates button is the primary action."
				},
				{
					"name": ".smaller",
					"escaped": "smaller",
					"description": "A smaller button"
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