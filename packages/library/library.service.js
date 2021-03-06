const Library = require('./models/library.model')

exports.insertLibrary = async (libraryData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const library = new Library({
                name: libraryData.name,
                city: libraryData.city,
                department: libraryData.department,
                year: libraryData.year,
                isOpen: libraryData.isOpen
            });
            const result = await library.save()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

exports.updateLibraryById = async (_id, libraryData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const library = await Library.findByIdAndUpdate({ _id }, {
                name: libraryData.name,
                city: libraryData.city,
                department: libraryData.department,
                year: libraryData.year,
                isOpen: libraryData.isOpen
            },{ new: true})
            resolve(library)
        } catch (error) {
            reject(error)
        }
    })
}

exports.findAllLibraries = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const libraries = await Library.find()
            resolve(libraries)
        } catch (error) {
            reject(error)
        }
    })
}

exports.findOneLibrary = async (keyValue) => {
    return new Promise(async (resolve, reject) => {
        try {
            const library = await Library.findOne(keyValue)
            resolve(library)
        } catch (error) {
            reject(error)
        }
    })
}