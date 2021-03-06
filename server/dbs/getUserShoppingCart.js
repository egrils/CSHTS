const cn = require('./connect');

function getUserShoppingCart(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('users');

      collection.findOne({sno: req.body.userSno}, (err, result) => {
        const callbackArray = Array.isArray(result.myShoppingCart) && result.myShoppingCart.length > 0 ? result.myShoppingCart.reverse() : [];

        callback(callbackArray);
      });

      database.close();
    }
  });
}

module.exports = getUserShoppingCart;
