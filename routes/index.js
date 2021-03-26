const routes = require('express').Router();

// route to different files
routes

   .get('/', (req, res, next) => {
      res.render('pages/index', { title: 'Alliance Troop Totals ', path: '/', pageTitle: 'Troop Totals' });
   })
   .use((req, res, next) => {
      // 404 page
      res.render('pages/404', { title: '404 - Page Not Found', path: req.url, pageTitle: 'Alliance Troop Totals' })
   })

module.exports = routes;