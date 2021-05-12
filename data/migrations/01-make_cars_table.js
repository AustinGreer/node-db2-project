exports.up = function(knex) {
    return knex.schema
        .createTable('cars')
}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('cars')
}