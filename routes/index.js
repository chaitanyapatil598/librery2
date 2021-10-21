const libraryController = require('../packages/library/library.controller')
module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send({
            status: true,
            statusCode: 200,
            message: "welcome aspra server"
        })
    })
}
        

    // Get library list
    app.get('/library/list', libraryController.getLibraryList)

    // Get library 
    app.post('/library/findOne', libraryController.getLibrary)

    //add library
    app.post('/library/add', libraryController.addLibrary)

    // update library by Id
    app.put('/library/update/:libraryId', libraryController.updateLibraryById)

}
