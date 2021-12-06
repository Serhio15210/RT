const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const controller2 = require('../controllers/api_controller')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER']), controller.getUsers)
router.get('/user_one',authMiddleware, controller.getUserOne)
router.put('/update', authMiddleware, controller.update)
router.delete('/delete', authMiddleware, controller.delete)
router.get('/twitter_api', controller2.twitter_api)
router.get('/twitter_api_api', controller2.twitter_api_1)
router.get('/getHotNews', controller2.getHotNews)

module.exports = router
