var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ésta es la aplicación 1' });
});

/* GET healthcheck */ 
router.get('/revisasivivo', (req, res) => {
  res.send({status: 'Estoy bien'})
})

module.exports = router;
