require('dotenv').config();

const shopifyAPI = require('shopify-node-api');

const Shopify = new shopifyAPI({
  shop: 'northernbrewer-staging',
  shopify_api_key: process.env.SHOPIFY_API_KEY,
  access_token: process.env.ACCESS_TOKEN
})

const getCustomers = (req, res) => {
  Shopify.get('/admin/customers.json', function(err, data, headers){
    if (err) {
      res.json(err)
    } else {
      console.log(headers);
      res.json(data);
    }
  })
}

const updateCustomer = (req, res) => {
  const { id } = req.body;
  console.log(id);
  Shopify.put(`admin/customers/${id}.json`, req.body, function(err, data, headers){
    if (err) {
      res.json(err)
    } else {
      console.log(headers);
      res.json(data);
    }
  })
}

const createCustomer = (req, res) => {
  Shopify.post('/admin/customers.json', req.body, function(err, data, handlers) {
    if (err) {
      res.json(err)
    } else {
      console.log(headers);
      res.json(data);
    }
  })
}

module.exports = {
  getCustomers,
  updateCustomer,
  createCustomer
}