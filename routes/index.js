const libreryController = require('../packages/library/library.controller')



module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send({
            status: true,
            statusCode: 200,
            message: "welcome aspra server"
        })
    })
    // add librery post api
    app.post('/librery/add', libreryController.addLibrary)
 
}
