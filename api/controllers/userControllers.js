require('dotenv').config();

const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: 'northernbrewer-staging',
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.PASSWORD
})

const getCustomer = (req, res) => {
  const { id } = req.query;
  shopify.customer.get(id)
    .then(customer => res.json(customer))
    .catch(err => res.json(err));
}

const updateCustomer = (req, res) => {
  console.log(req);
  const { id } = req.body;
  console.log(req.body);
  shopify.customer.update(id, req.body)
    .then(customer => res.json(customer))
    .catch(err => res.json(err));
}

const createCustomer = (req, res) => {
  shopify.customer.create(req.body)
    .then(customer => res.json(customer))
    .catch(err => res.json(err));
}

module.exports = {
  getCustomer,
  updateCustomer,
  createCustomer
}