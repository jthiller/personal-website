## Redesign 2014
~~Whenever I approach a redesign of my portfolio, I like to turn it into a wishlist of things I'd like to learn or experiment with. It has been over five years since I last did a redesign, and the web world had changed a lot since then.~~


When I approach a redesign of my own portfolio, I take it as an opportunity to learn as many new topics as possible as well as create something that feels ‘new’ to the internet. This time around, I took the opportunity to explore Node.js. I’ve had limited experience with Node on a second-hand basis in the past; both of the winning hackathon projects I worked on operated via a Node backend. This website, however, is my first time using Node to build any sort of site of my own.

I structured my Node environment around Amazon's Elastic Beanstalk as to take advantage of their integrated git deployment system. The code, therefore, is <a href='https://github.com/jthiller/personal-website'>versioned on github</a>. If you happen to take a look at my user page, you might note this page was mostly built on the nights and weekends of an 17-day committing spree. There's passion in those numbers, friend.

To keep myself on-track, I used Asana to prioritize tasks. The Asana workflow worked well because I also utilize it for work; so when I had an idea I could quickly add it to my list, then I could check off a couple tasks each night.

The website it's self is built on Express.js, the popular server framework. The CSS is preprocessed using Stylus with Nib for vendor prefixing. Stylus carried only a slight learning curve from Less or Scss, but had some major advantages. The biggest thing Stylus offered was the ability to inline, then group my media queries using a cache. Roman Komarov, a Stylus contributor, writes about the process on his blog (<a href='http://kizu.ru/en/issues/new-stylus-features/'>kizu.ru</a>).

The design of this site comes from the evolution and iteration of many various projects. For example, you may be asking yourself, &#8220;Where's my hamburger?&#8221; The hamburger, in this case referring to the 3-bar menu icon used throughout contemporary UI design. In my initial design for the site, I used the hamburger, neatly crafted to animate from its &#9776; state to an &#10005; on activation. However on this website, my playground for experimentation, I wanted to try something a little different. I landed on the &#8220;+ to -&#8221;  set as an alternative to the mainstay of the hamburger.

data-height='275' data-theme-id='0' data-slug-hash='kraIu' data-default-tab='result' class='codepen'>See the Pen <a href='http://codepen.io/jthiller/pen/kraIu'>Animated ☰ to × Button</a> by Joey Hiller (<a href='http://codepen.io/jthiller'>@jthiller</a>) on <a href='http://codepen.io'>CodePen</a>.
<script async src='//codepen.io/assets/embed/ei.js'></script>

In large part, the website was inspired by a two week vacation to Tokyo. Though many of the elements existed independently, the trip acted as a sabbatical for me to bring many of these ideas together. I've always had a passion for minimalism, and of all places I feel a portfolio is a good place to limit visual noise.
