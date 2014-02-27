/*
 * GET users listing.
 */

exports.list = function(req, res){
  // res.send({ title: 'Joey Hiller' });
  res.render('about', { title: 'About Page' });
};