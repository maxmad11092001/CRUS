const siteController = require('../controller/site')
const productRouter = require('./products')
const adminRouter = require('./admin')

function route(app){
    app.use('/product', productRouter)
    app.get('/', siteController.index)
    app.get('/admin', adminRouter)
}

module.exports = route