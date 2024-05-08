const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('index', { title: 'Página de inicio' });
});

module.exports = router;