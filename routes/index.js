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
   /* app.post('/librery/add', libreryController.addLibrary)
    app.post('/librery/addUnshift', libreryController.unShiftLibrary)
    app.post('/librery/addPush', libreryController.pushLibrary)
    app.delete('/librery/deletepop', libreryController.popDeleteLastLibrary)
    app.delete('/librery/deleteshift', libreryController.shiftDeleteFirstLibrary)
    app.delete('/librery/deletesplice', libreryController.spliceDeleteLibrary)

<<<<<<< HEAD
} */
=======
    // Get library list
    app.get('/library/list', libraryController.getLibraryList)

    // Get library 
    app.post('/library/findOne', libraryController.getLibrary)

    // update library by Id
    app.put('/library/update/:libraryId', libraryController.updateLibraryById)

>>>>>>> d8c494b0f80dea3c61b2abc7d75df590c20998bb
}
