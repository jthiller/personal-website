## Redesign 2014
~~Whenever I approach a redesign of my portfolio, I like to turn it into a wishlist of things I'd like to learn or experiment with. It has been over five years since I last did a redesign, and the web world had changed a lot since then.~~


When I approach a redesign of my own portfolio, I take it as an opportunity to learn as many new topics as possible as well as create something that feels ‘new’ to the internet. This time around, I took the opportunity to explore Node.js. I’ve had limited experience with Node on a second-hand basis in the past; both of the winning hackathon projects I worked on operated via a Node backend. This website, however, is my first time using Node to build any sort of site of my own.

I structured my Node environment around Amazon's Elastic Beanstalk as to take advantage of their integrated git deployment system. The code, therefore, is <a href='https://github.com/jthiller/personal-website'>versioned on github</a>. If you happen to take a look at my user page, you might note this page was mostly built on the nights and weekends of an 17-day committing spree. There's passion in those numbers, friend.

The website it's self is built on Express.js, the popular server framework. The CSS is preprocessed using Stylus with Nib for vendor prefixing. Stylus carried only a slight learning curve from Less or Scss, but had some major advantages. The biggest thing Stylus offered was the ability to inline, then group my media queries using a cache. Roman Komarov, a stylus contribuitor, writes about the process on his blog (<a href='http://kizu.ru/en/issues/new-stylus-features/'>kizu.ru</a>).
