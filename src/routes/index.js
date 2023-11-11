const { Router } = require('express')
const userRouter = require('./users.router.js')
const cartRouter = require('./carts.router.js')
const productsRouter = require('./products.router.js')
const viewsRouter = require('./views.router.js')
const messagesRouter = require('./messages.router.js')


const router = Router()




router.use('/views', viewsRouter)
router.use('/api/users', userRouter)
router.use('api/carts', cartRouter)
router.use('/api/products', productsRouter)
router.use('/api/message', messagesRouter)



module.exports = router
