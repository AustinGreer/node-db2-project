const router = require('express').Router()
const Cars = require('./cars-model')

// get - resolves to an array of cars
router.get('/', async (req, res) => {
    try {
        const currentCars = await Cars.getAll()
        res.json(currentCars)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router