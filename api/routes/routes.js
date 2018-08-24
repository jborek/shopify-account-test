const userControllerMethods = require('../controllers/userControllers');

module.exports = (app) => {
  app.route('/customer').get(userControllerMethods.getCustomer),
  app.route('/updatecustomer').post(userControllerMethods.updateCustomer),
  app.route('/createcustomer').post(userControllerMethods.createCustomer)
}