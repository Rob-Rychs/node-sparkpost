'use strict';

var key = 'YOURAPIKEY'
  , SparkPost = require('sparkpost')
  , client = new SparkPost(key);

client.webhooks.getDocumentation(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log('Congrats you can use our SDK!');
  }
});
