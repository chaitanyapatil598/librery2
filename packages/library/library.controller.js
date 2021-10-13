const LibraryService = require('./library.service')
module.exports = {
    addLibrary: async(req, res, next) => {
        try {
            const libreryData = req.body
            const libraryResult =  await LibraryService.insertLibrary(libreryData)
            return res.send({
                data: libraryResult,
                message: ' librery added succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.send({
                message: ' internal server error at add librery',
                status: false,
                statusCode: 500
            })

        }
    }
}

