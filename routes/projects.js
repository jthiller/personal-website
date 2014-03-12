var instagram = "cats";

exports.acmemade = function(req, res){
	res.render('index',
		{
			"pagetitle": "AcmeMade",
			"title": "AcmeMade",
			"backgroundgraphic": "/images/header_acmemade.svg",
			"projectcontent": [
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"sectiontitle": "At Home With Design: AcmeMade & San&nbsp;Francisco",
							"content": "My job at JOBY connects me to AcmeMade, a sister brand. There are three brands connected to my company, and it is common that I do work across all three."
						}
					]
				},
				{
					"textBlock": true,
					"quote": true,
					"textBlocks": [
						{
							"content": "One of the most picturesque cities in the world, San Francisco is packed with inspiration. AcmeMade has flourished in creating products that protect your devices while complementing your personality since 2002, all in this 7x7 square mile span of innovation and culture. Understanding the city, the distinct look of its people, and the activities they enjoy, is how AcmeMade draws its product ideas. From photographing sunsets at the beach or reading on the pier, to working in the park or racing in a morning commute - inspiration is available at every turn."
						},
						{
							"content": "Vibrant thoroughfares and neighborhoods such as Noe Valley, Fillmore Street, Montgomery Street, Oak Street, and Bay Street inspire the AcmeMade design group to create products that reflect a love of technology and style."
						}
					]
				},
				{
					"doubleImage": true,
					"scalable": true,
					"caption": false,
					"imageSet": [
						{
							"image": "/images/project/acmemade/SkinnySleeveHome.jpg",
							"imagealt": "The AcmeMade Skinny Sleeve"
						},
						{
							"image": "/images/project/acmemade/SkinnyBook_Up.jpg",
							"imagealt": "The AcmeMade Skinny Book"
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "In approaching the AcmeMade redesign, I wanted to showcase the brand's style through the eyes of the target consumer as well as that of the designer. I had the benefit of sitting next to Luis Quehl (the brand’s primary designer) while I was an intern, so I had a decent familiarity with the brand’s core. Luis had the flexibility to build the brand around his vision of what a stylish tablet sleeve or camera backpack should look like; minimalist, clean, and simple. As this extension of Luis, AcmeMade saw that a camera bag wasn't solely about the gear but about fashion and the person wearing it."
						},
						{
							"content": "I met with the brand managers and product designers to gather a sense of the intention of the brand. Andy, the primary brand manager, provided a powerpoint of ###. Luis, the lead designer, provided a mood board consisting of beautiful homes that represented his vision of the customer. We had conversations about the products, how they had been represented the past, and how lacking the existing e-commerce site was at telling the product's design story."
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/acmemade/SkinnyBook_Up.jpg",
							"imagealt": "The AcmeMade Skinny Book",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"sectiontitle": "Let's make something new.",
							"content": "With an idea of what the brand looked like, it was now time to formulate a structure for a completely redesigned website. <br>In e-commerce, there are many existing conventions that a user has come to expect when doing some online shipping. Add too much pollution to this process, and the shopping experience is impaired."
						},
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/acmemade/projectSketches.jpg",
							"imagealt": "Late-stage AcmeMade sketches.",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "The first logical step in designing the site was to develop some sort of hierarchy for the brand's products, both present and future. I worked with the brand lead to define a simple category system that helped to draw focus to the products offered. The existing system had become fragmented, and this was an opportunity for us to work together to clarify the portfolio."
						},
						{
							"content": "In defining the product selling points, it was concluded that clean product photography was the best carrier of the product message for our use case. Product lifestyle had been a difficult resource for the company at the time, so focus on studio photography was preferred. The emphasis of studio photography also worked well into the constraints of the chosen product CMS. Given that the pages for each product would be automatically generated, the room for customization around images was eliminated."
						},
						{
							"sectiontitle": "Design",
							"content": "With the information architecture mostly defined, it was time to move onto some wireframes and mockups. The design sprint was super quick at just over a week from the time of wireframing to code. The wireframing process allowed me to quickly work through many layouts and figure out the proper organization for the page. Discussions with the team were frequent througout this stage as we built out the pages in our head."
						},
						{
							"content": "From the wireframes, some quick experimenting with visual styles led into full-scale mockups."
						},
						{
							"content": "Once the rough idea was figured out, I took to Fireworks (RIP!) to begin mocking up the website. Typically at this point I'd move straight into code, but with the scale of this project, it was important to get the sign-off of the CMO, Creative Director, and Brand Manager before diving into the Magento themeing process."
						},
						{
							"sectiontitle": "Development",
							"content": "Coding on the <a href='http://magento.com'>Magento</a> e-commerce platform was a unique learning curve. A fresh install of Magento has over 24,000 separate template, logic, and routing files; all working together to generate an extremely complex and capable website."
						},
					]
				}
			] //End ProjectContent
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
					"singleImage": true,
					"scalable": true,
					"caption": false,
					"imageSet": [
						{
							"image": "/images/project/portfolio/projectImage.jpg",
							"imagealt": "A late sketch of the website's header."
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/portfolio/earlySketch.jpg",
							"imagealt": "An early sketch of the site.<br>The initial design was inspired by a trip to Tokyo"
						}
					]
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
					"singleImage": true,
					"imageSet": [
						{
							"image": "http://placekitten.com/g/900/500",
							"imagealt": "Me a long time ago.",
						}
					]
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
