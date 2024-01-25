const router = require('express').Router();

router.get('/tasks', async (req, res, next) => {
    res.send('Tasks Found');
})

module.exports = router;