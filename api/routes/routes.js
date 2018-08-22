const userControllerMethods = require('../controllers/userControllers');

module.exports = (app) => {
  app.route('/products').get(userControllerMethods.getProducts);
}