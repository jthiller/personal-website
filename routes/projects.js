exports.portfolio = function(req, res){
	res.render('index',
		{
			"pagetitle": "New Portfolio",
			"title": "Portfolio<br>Redesign",
			// "backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projectcontent": [
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"sectiontitle": "Redesign 2014",
							"content": "When I approach a redesign of my own portfolio, I take it as an opportunity to learn as many new topics as possible as well as create something that feels ‘new’ to the internet. This time around, I took the opportunity to explore Node.js. I’ve had limited experience with Node on a second-hand basis in the past; both of the winning hackathon projects I worked on operated via a Node backend. This website, however, is my first time using Node to build any sort of site of my own."
						},
						{
							"content": "I structured my Node environment around Amazon's Elastic Beanstalk as to take advantage of their integrated git deployment system. The code, therefore, is <a href='https://github.com/jthiller/personal-website'>versioned on github</a>. If you happen to take a look at my user page, you might note this page was mostly built on the nights and weekends of an 17-day committing spree. There's passion in those numbers, friend."
						},
						{
							"content": "To keep myself on-track, I used Asana to prioritize tasks. The Asana workflow worked well because I also utilize it for work; so when I had an idea I could quickly add it to my list, then I could check off a couple tasks each night."
						},
						{
							"content": "The website it's self is built on Express.js, the popular server framework. The CSS is preprocessed using Stylus with Nib for vendor prefixing. Stylus carried only a slight learning curve from Less or Scss, but had some major advantages. The biggest thing Stylus offered was the ability to inline, then group my media queries using a cache. Roman Komarov, a Stylus contributor, writes about the process on his blog (<a href='http://kizu.ru/en/issues/new-stylus-features/'>kizu.ru</a>)."
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/portfolio/projectImage.jpg",
							"imagealt": "A sketch of the website's header."
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "The design of this site comes from the evolution and iteration of many various projects. For example, you may be asking yourself, &#8220;Where's my hamburger?&#8221; The hamburger, in this case refers to the 3-bar menu icon used throughout contemporary UI design. In my initial design for the site I used the hamburger, and neatly crafted the animation of &#9776; to &#10005; on activation. However on this website, my playground for experimentation, I wanted to try something a little different. I landed on the &#8220;+ to &mdash;&#8221;  set as an alternative to the mainstay of the hamburger."
						},
						{
							"content": "<p data-height='300' data-theme-id='0' data-slug-hash='kraIu' data-default-tab='result' class='codepen'>See the Pen <a href='http://codepen.io/jthiller/pen/kraIu'>Animated ☰ to × Button</a> by Joey Hiller (<a href='http://codepen.io/jthiller'>@jthiller</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src='//codepen.io/assets/embed/ei.js'></script>",
						},
						{
							"content": "In large part, the website was inspired by a two week vacation to Tokyo. Though many of the elements existed independently, the trip acted as a sabbatical for me to bring these ideas together. I've always had a passion for minimalism, and of all places I feel a portfolio is a good place to limit visual noise."
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
							"imagealt": "An early sketch of the site.<br>The initial design was inspired by my adventures in Tokyo."
						}
					]
				},
			]
		}
	);
};

exports.acmemade = function(req, res){
	res.render('index',
		{
			"pagetitle": "Acme Made",
			"title": "Acme Made",
			"backgroundgraphic": "/images/header_acmemade.svg",
			"projectcontent": [
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"sectiontitle": "At Home With Design: Acme&nbsp;Made & San&nbsp;Francisco",
							"content": "My job at JOBY connects me to Acme Made, a sister brand. There are three brands connected to my company, and it is common that I do work across all three."
						}
					]
				},
				{
					"textBlock": true,
					"quote": true,
					"textBlocks": [
						{
							"content": "One of the most picturesque cities in the world, San Francisco is packed with inspiration. AcmeMade has flourished in this 7 by 7 square mile span of innovation and culture since 2002. Understanding the city, the distinct look of its people, and the activities they enjoy, is how AcmeMade creates products that protect your devices while complementing your personality. From photographing sunsets at the beach or reading on the pier, to working in the park or racing in a morning commute - inspiration is available at every turn."
						},
						{
							"content": "Vibrant thoroughfares and neighborhoods such as Noe Valley, Fillmore Street, Montgomery Street, Oak Street, and Bay Street inspire the Acme Made design group to create products that reflect a love of technology and style."
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/acmemade/SkinnySleeveHome.jpg",
							"imagealt": "The Acme Made Skinny Sleeve"
						},
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "In approaching the Acme Made redesign, I wanted to showcase the brand's style through the eyes of the target consumer as well as that of the designer. I had the benefit of sitting next to the brand’s primary designer while I was an intern, so I had a decent familiarity with the brand’s core. In this case, the designer had the flexibility to build the brand around his vision of what a stylish tablet sleeve or camera backpack should look like; minimalist, clean, and simple. As this extension of his decisions, Acme Made showed that a camera bag wasn't solely about the gear but about fashion and the creativity of the person wearing it."
						},
						{
							"content": "I met with the brand managers and product designers to gather a sense of the intention of the brand. The lead designer provided a mood board consisting of beautiful homes that represented his vision of the customer. We had conversations about the products, how they had been represented the past, and how lacking the existing e-commerce site was at telling the product's design story."
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
							"imagealt": "The Acme Made Skinny Book for iPad Mini",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"sectiontitle": "Let's make something new.",
							"content": "With an idea of what the brand looked like, it was now time to formulate a structure for a completely redesigned website. <br>In e-commerce, there are many existing conventions that a user has come to expect when doing some online shopping. Add too much pollution to this process, and the shopping experience is impaired."
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
							"imagealt": "Late-stage Acme Made sketches.",
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
					]
				},
				{
					"fullImage": true,
					"scalable": false,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/acmemade/OnScreeniPadMockup.jpg",
							"imagealt": "iPad mockup showing the selected design in tablet use and at a mobile breakpoint.",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"sectiontitle": "Development",
							"content": "Coding on the <a href='http://magento.com'>Magento</a> e-commerce platform was a unique learning curve. A fresh install of Magento has over 24,000 separate template, logic, and routing files; all working together to generate an extremely complex and capable website."
						},
						{
							"content": "I spent about four weeks building the site theme. The process included a lot of testing across different product types and responsive breakpoints. Using SCSS as a preprocessor helped keep things organized for such a large-scale project."
						},
					]
				}
			] //End ProjectContent
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
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							// "sectiontitle": "Development",
							"content": "In April 2013 I attended Photo Hack Day 4 with one thought in mind. &#8220;<em>I won second at PHD3. It might be a little crazy, but I know I can do better than that.</em>&#8220;"
						},
						{
							// "sectiontitle": "Development",
							"content": "Going into the hackathon, I had no project ideas. One friend that I made at a previous hackathon would also be there, so we decided to team up. Together, we found a couple of other folks who'd fit in to build a solid team. We threw ideas around for a while, but couldn't decide on anything concrete. It wasn't until six hours into our 24 hour hackathon that we landed on the idea: we would create a service that helps people find great and inspiring images across the globe. At that point, it was time to get busy. With 18 hours to go, we quickly discussed the app structure. Then I dove into the design of the app while the others built the backend framework."
						},
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/letsgoio/HomeScreenshot.jpg",
							"imagealt": "LetsGo.io Load Screen",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "On page load, the application geolocates based on the user's IP. This added detail helps to make the app feel more friendly and easier to understand. The users' thought process can begin with an already recognized place."
						},
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/letsgoio/MapChangeScreenshot.jpg",
							"imagealt": "The user can change their route based on scenic spots.",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "Once a trip has been entered, the app draws the shortest path between the two points and populates the view with top-rated pictures.<br>The user can customize their trip by changing their route to create detours for scenic spots."
						},
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/letsgoio/FullviewScreenshot.jpg",
							"imagealt": "Full image view drill-down from the map.",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"sectiontitle": "Press",
							"content": "Some coverage of the hackathon can be found online:"
						},
						{
							"content": "<a href='http://thenextweb.com/insider/2013/04/08/after-two-days-and-63-hacks-we-choose-the-best-from-aviary-and-facebooks-fourth-photo-hack-day/'>TheNextWeb</a><br><a href='http://blog.aviary.com/posts/photo-hack-day-4-recap-300-developers-and-68-apps-in-less-than-24-hours'>Aviary Blog</a>"
						},
					]
				},
			]
		}
	);
};


exports.gorillacam = function(req, res){
	res.render('index',
		{
			"pagetitle": "GorillaCam",
			"title": "GorillaCam",
			// "backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projectcontent": [
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "Shortly after starting at JOBY as an intern, I was presented with the opportunity to redesign their aging iPhone app, GorillaCam, from the ground-up."
						},
						{
							"content": "The project presented many possibilities for improvement and experimentation. With a 'sky's the limit' mentality, I jumped right in. Fortunately I had been a user of the earlier versions of GorillaCam before working at JOBY. This familiarity made my understanding of the userbase and community easier."
						},
					]
				},
				// {
				// 	"singleImage": true,
				// 	"scalable": true,
				// 	"caption": true,
				// 	"imageSet": [
				// 		{
				// 			"image": "/images/project/gorillacam/GorillaCam_EarlySketches.jpg",
				// 			"imagealt": "Early GorillaCam sketches",
				// 		}
				// 	]
				// },
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "With the app's features and guidelines outlined, I began wireframing the app. I was able to quickly test out the early wireframes within the team. Once the wireframes hit a certain point of completion, I tested them out on coworkers."
						},
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/gorillacam/Balsamiq_Mockups.jpg",
							"imagealt": "GorillaCam mockups built in Balsamiq",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "For early testing, I utilized the method of paper prototyping the app at-scale. A script guided the users throught the app through a series of prompts. Notes were taken on each step of the process, then a post-test interview gave further feedback."
						},
					]
				},
				// {
				// 	"singleImage": true,
				// 	"scalable": true,
				// 	"caption": true,
				// 	"imageSet": [
				// 		{
				// 			"image": "/images/project/gorillacam/FullviewScreenshot.jpg",
				// 			"imagealt": "Testing the app using paper prototypes.",
				// 		}
				// 	]
				// },
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "With the feedback from testing, some minor rework was made to the layout of the app. Some quick testing validated these changes, then it was time to move into UI styling. Logos were finalized for each of the modes and a general theme was decided upon."
						},
					]
				},
				{
					"singleImage": true,
					"scalable": false,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/gorillacam/UIProgression.gif",
							"imagealt": "Progression of the camera UI.",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "As the designs shaped up and neared development, I recognized the necessity for some sort of organization. As a result, I built out a <a href='http://gorillacam.joeyhiller.com/'>style/asset bank guide</a> to keep everybody on the same page. As the developers began to assimilate the designs, some small tweaks in the design were required. Changes were made and respective assets were updated in the guide."
						},
					]
				},
				{
					"singleImage": true,
					"scalable": false,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/gorillacam/StyleGuide.jpg",
							"imagealt": "The GorillaCam styleguide.",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "It was around this time that Apple released the iPhone 5, with it's taller screen. Unfortunately, the app was designed and built to utilize only one screen size (at two resolutions) as there were never any plans to port this app to other devices. Due to budget constraints on the project, the decision was made to skip a rework of the menus and layout."
						},
					]
				},
				// {
				// 	"singleImage": true,
				// 	"scalable": true,
				// 	"caption": true,
				// 	"imageSet": [
				// 		{
				// 			"image": "/images/project/gorillacam/FullviewScreenshot.jpg",
				// 			"imagealt": "The app on an iPhone 4 and iPhone 5",
				// 		}
				// 	]
				// },
				// {
				// 	"textBlock": true,
				// 	"quote": false,
				// 	"textBlocks": [
				// 		{
				// 			"content": "Today, GorillaCam makes about enough from app store sales to keep up with it's development budget. Some time was spent chasing bugs, some extra time is being spent on currently unreleased features."
				// 		},
				// 	]
				// },
				// {
				// 	"singleImage": true,
				// 	"scalable": true,
				// 	"caption": true,
				// 	"imageSet": [
				// 		{
				// 			"image": "/images/project/gorillacam/FullviewScreenshot.jpg",
				// 			"imagealt": "Loved by its community!",
				// 		}
				// 	]
				// },
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": ""
						},
					]
				},
			]
		}
	);
};




exports.bkr = function(req, res){
	res.render('index',
		{
			"pagetitle": "For Bkr",
			"title": "For Bkr",
			// "backgroundgraphic": "/images/JAPAN_Simplified.svg",
			"projectcontent": [
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "Hello Bkr friends, here is a small collection of some of my non-web related work to help you get a better sense of the breadth of my portfolio."
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "Throughout my career I have enjoyed the process of creating concert posters. To me, they are one of the ultimate forms of expression. My process for making a poster includes constantly listening to their music to visualize their style."
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/bkr/Eskmo_FLAT_COLOR.jpg",
							"imagealt": "Eskmo is a Bay Area artist creating experimental electronic music.",
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/bkr/GOLDPANDA.jpg",
							"imagealt": "Gold Panda is an alternative electronic artist on the Ghostly label.",
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/bkr/PTM_Poster_FLAT.jpg",
							"imagealt": "Designed as part of a larger campaign including radio, web, and Facebook.",
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": false,
					"imageSet": [
						{
							"image": "/images/project/bkr/Waterhouse_FLAT_COLOR.jpg",
							"imagealt": "Designed as part of a larger campaign.",
						}
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": false,
					"imageSet": [
						{
							"image": "/images/project/bkr/YellowOstrich_COLOR_11x17_FINAL_Yellow.jpg",
							"imagealt": "",
						}
					]
				},
				{
					"textBlock": true,
					"quote": false,
					"textBlocks": [
						{
							"content": "Through experience, I have learned that a major part of the success of a project can be attributed to good documentation."
						},
					]
				},
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/bkr/AcmeMade_Document.jpg",
							"imagealt": "Section of the style guide defining color swatch maintenance.",
						}
					]
				},
				// {
				// 	"textBlock": true,
				// 	"quote": false,
				// 	"textBlocks": [
				// 		{
				// 			"content": ""
				// 		},
				// 	]
				// },
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/bkr/Buck_Coffeebag.jpg",
							"imagealt": "Student project: branding",
						}
					]
				},
				// {
				// 	"textBlock": true,
				// 	"quote": false,
				// 	"textBlocks": [
				// 		{
				// 			"content": "As the designs shaped up and neared development, I recognized the necessity for some sort of organization. As a result, I built out a <a href='http://gorillacam.joeyhiller.com/'>style/asset bank guide</a> to keep everybody on the same page. As the developers began to assimilate the designs, some small tweaks in the design were required. Changes were made and respective assets were updated in the guide."
				// 		},
				// 	]
				// },
				{
					"singleImage": true,
					"scalable": true,
					"caption": true,
					"imageSet": [
						{
							"image": "/images/project/bkr/SLRZoom_Full.jpg",
							"imagealt": "A version of the redesigned JOBY product pages.",
						}
					]
				},
				// {
				// 	"textBlock": true,
				// 	"quote": false,
				// 	"textBlocks": [
				// 		{
				// 			"content": "It was around this time that Apple released the iPhone 5, with it's taller screen. Unfortunately, the app was designed and built to utilize only one screen size (at two resolutions) as there were never any plans to port this app to other devices. Due to budget constraints on the project, the decision was made to skip a rework of the menus and layout."
				// 		},
				// 	]
				// },
				// {
				// 	"textBlock": true,
				// 	"quote": false,
				// 	"textBlocks": [
				// 		{
				// 			"content": ""
				// 		},
				// 	]
				// },
			]
		}
	);
};
