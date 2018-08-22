require('dotenv').config();

const shopifyAPI = require('shopify-node-api');

const Shopify = new shopifyAPI({
  shop: 'northernbrewer-staging',
  shopify_api_key: process.env.SHOPIFY_API_KEY,
  access_token: process.env.ACCESS_TOKEN
})

const getProducts = (req, res) => {
  Shopify.get('/admin/products.json', function(err, data, headers){
    if (err) {
      res.json(err)
    } else {
      console.log(headers);
      res.json(data);
    }
  })
}

module.exports = {
  getProducts
}