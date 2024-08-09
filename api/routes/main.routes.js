const { Router } = require('express');
const router = Router();

router.get('/users', (request, response) => {
    response.status(200).json({ users: [] });
})

module.exports = router;