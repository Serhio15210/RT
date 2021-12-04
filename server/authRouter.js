const Router = require('express')
const router = new Router()
const controller = require('./authController')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)
router.put('/update/', authMiddleware, controller.update)
router.delete('/delete/:id', authMiddleware, controller.delete)

module.exports = router
