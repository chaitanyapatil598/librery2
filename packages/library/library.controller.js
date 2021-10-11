
module.exports = {
    addLibrary: (req, res, next) => {
        try {
            const libreryData = req.body

            return res.send({
                data: libreryData,
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
    }, pushLibrary: (req, res, next) => {
        try {
            const libreryData = req.body

            return res.push({
                data: libreryData,
                message: ' librery added succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.push({
                message: ' internal server error at add librery',
                status: false,
                statusCode: 500
            })
        }
    },

    unShiftLibrary: (req, res, next) => {
        try {
            const libreryData = req.body

            return res.unShift({
                data: libreryData,
                message: ' fist row of librery added succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.unShift({
                message: ' fist row of librery was not adeded !',
                status: false,
                statusCode: 500
            })

        }
    },
    popDeleteLastLibrary: (req, res, next) => {
        try {
            const libreryData = req.body

            return res.pop({
                data: libreryData,
                message: ' last row of librery deleted succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.pop({
                message: ' last row of librery was not deleted !',
                status: false,
                statusCode: 500
            })
        }
    },
    shiftDeleteFirstLibrary: (req, res, next) => {
        try {
            const libreryData = req.body

            return res.shift({
                data: libreryData,
                message: ' last row of librery deleted succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.shift({
                message: ' last row of librery was not deleted !',
                status: false,
                statusCode: 500
            })
        }
    },
    spliceDeleteLibrary: (req, res, next) => {
        try {
            const libreryData = req.body

            return res.splice({
                data: libreryData,
                message: ' selective row of librery deleted succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.splice({
                message: ' selective row of librery was not deleted !',
                status: false,
                statusCode: 500
            })

        }
    },
}

