const LibraryService = require('./library.service')
module.exports = {
    addLibrary: async (req, res, next) => {
        try {
            const libreryData = req.body
            if (!libreryData.name) {
                return res.status(400).json({
                    message: 'library name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.city) {
                return res.status(400).json({
                    message: 'library city required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.department) {
                return res.status(400).json({
                    message: 'library department required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.year) {
                return res.status(400).json({
                    message: 'library year required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.isOpen) {
                return res.status(400).json({
                    message: 'library status required!',
                    status: false,
                    statusCode: 400
                })
            }
            const libraryResult = await LibraryService.insertLibrary(libreryData)
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
    },

    getLibraryList: async (req, res, next) => {
        try {
            const libraryList = await LibraryService.findAllLibraries()
            return res.status(200).json({
                message: 'Library list get successfully.',
                status: true,
                statusCode: 200,
                data: libraryList
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error!',
                status: false,
                statusCode: 500,
                error: error
            })
        }
    },

    getLibrary: async (req, res, next) => {
        try {
            const filterKeyValue = req.body
            if (Object.entries(filterKeyValue).length === 0 && filterKeyValue.constructor === Object) {
                return res.status(400).json({
                    message: 'invalid filter key values!',
                    status: false,
                    statusCode: 400
                })
            }
            if (filterKeyValue.city) {
                const library = await LibraryService.findOneLibrary(filterKeyValue)
                if (!library) {
                    return res.status(200).json({
                        message: 'Library not found.',
                        status: true,
                        statusCode: 204
                    })
                }
                return res.status(200).json({
                    message: 'Library get successfully.',
                    status: true,
                    statusCode: 200,
                    data: library
                })
            } else {
                return res.status(400).json({
                    message: 'required city!',
                    status: false,
                    statusCode: 400
                })
            }

        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error!',
                status: false,
                statusCode: 500,
                error: error
            })
        }
    },

    updateLibraryById: async (req, res, next) => {
        try {
            const libreryData = req.body
            const _id = req.params.libraryId
            if (!_id) {
                return res.status(400).json({
                    message: 'library id required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.name) {
                return res.status(400).json({
                    message: 'library name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.city) {
                return res.status(400).json({
                    message: 'library city required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.department) {
                return res.status(400).json({
                    message: 'library department required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.year) {
                return res.status(400).json({
                    message: 'library year required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!libreryData.isOpen) {
                return res.status(400).json({
                    message: 'library status required!',
                    status: false,
                    statusCode: 400
                })
            }

            const libraryResult = await LibraryService.updateLibraryById(_id,libreryData)
            return res.send({
                data: libraryResult,
                message: ' librery updated succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.status(500).json({
                message: 'Internal server error!',
                status: false,
                statusCode: 500,
                error: error
            })
        }
    }
}

