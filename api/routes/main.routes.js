const { Router } = require('express');
const router = Router();

router.get('/api/v1/users', (request, response) => {
    response.status(200).json({ users: [] });
})

module.exports = router;