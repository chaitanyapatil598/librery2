const libraryController = require('../packages/library/library.controller')



module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send({
            status: true,
            statusCode: 200,
            message: "welcome aspra server"
        })
    })
    // add librery post api
<<<<<<< HEAD
    app.post('/librery/add', libreryController.addLibrary)
    app.post('/librery/addUnshift', libreryController.unShiftLibrary)
    app.post('/librery/addPush', libreryController.pushLibrary)
    app.delete('/librery/deletepop', libreryController.popDeleteLastLibrary)
    app.delete('/librery/deleteshift', libreryController.shiftDeleteFirstLibrary)
    app.delete('/librery/deletesplice', libreryController.spliceDeleteLibrary)

=======
    app.post('/library/add', libraryController.addLibrary)

    // Get library list
    app.get('/library/list',libraryController.getLibraryList)

    // Get library 
    app.post('/library/findOne',libraryController.getLibrary)
 
>>>>>>> 71a32d8876600a5a3dec971fd9b320e5eb7da3d9
}
