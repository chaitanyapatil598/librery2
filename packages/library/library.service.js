const Library = require('./models/library.model')

exports.insertLibrary = async (libraryData) => {
    return new Promise((resolve, reject) => {
        try {
            const library = new Library({
                name: libraryData.name,
                city: libraryData.city,
                department : libraryData.department,
                year:libraryData.year,
                isOpen:libraryData.isOpen
            });             
            library.save()
            resolve(library)
        } catch (error) {
            reject(error)
        }
    })
}

exports.editLibrary = async () => {

}