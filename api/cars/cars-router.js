const router = require('express').Router()
const Cars = require('./cars-model')

// get - resolves to an array of cars
router.get('/', async (req, res, next) => {
    try {
        const currentCars = await Cars.getAll()
        res.json(currentCars)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router