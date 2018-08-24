const userControllerMethods = require('../controllers/userControllers');

module.exports = (app) => {
  app.route('/customers').get(userControllerMethods.getCustomers),
  app.route('/updatecustomer').post(userControllerMethods.updateCustomer);
}