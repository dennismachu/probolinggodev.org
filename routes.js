const routes = module.exports = require('next-routes')();
routes
  .add('index', '/', 'index')
  .add('login', '/login', 'login')
  .add('logout', '/logout', 'logout')
  .add('about', '/about', 'about');
