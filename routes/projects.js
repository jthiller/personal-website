exports.portfolio = function(req, res){
	res.render('index', 
		{
			"pagetitle": "New Portfolio",
			"title": "Portfolio<br>Redesign",
			"backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projectcontent": [
				// {
				// 	"headline": "Creating trips around great photos."
				// },
				{
					"sectiontitle": "Redesign 2014",
					"content": "In building my new portfolio..."
				},
				{
					"image": "http://placekitten.com/g/900/500",
					"imagealt": "words",
					"link": ""
				},
				{
					"sectiontitle": "Ch. 2",
					"content": "Even more words."
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
			"backgroundgraphic": "/images/JAPAN_Simplified.svg",
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
		}
	);
};