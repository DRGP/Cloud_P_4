var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ésta es la aplicación 2' });
});

/* GET healthcheck */ 
router.get('/estoyvivo', (req, res) => {
  res.send({status: 'Sí estoy vivo'})
})

module.exports = router;
