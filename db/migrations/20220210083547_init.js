/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // applies changes to db
    return knex.schema
        .createTable("person", table => {
            table.increments("id");
            table.string("email").notNullable().unique();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.timestamps(true, true); // creates createdAt and updatedAt fields
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    // rollback/undo migrations / drop tables
    return knex.schema.dropTable("person");
};
