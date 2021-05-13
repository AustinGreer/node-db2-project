const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const { id } = req.params
    const specifiedCar = await Cars.getById(id)

    if (!specifiedCar) {
      next({status: 404, message: 'The car with the specified ID does not exist'})
    } else {
      req.car = specifiedCar
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique}
