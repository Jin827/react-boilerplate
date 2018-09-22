const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Server API is Up');
});

module.exports = router;
