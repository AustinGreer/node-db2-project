const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = async (id) => {
  const uniqueCar = await db('cars')
    .where('cars_id', id)
    .first()

  return uniqueCar
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {getAll, getById, create}