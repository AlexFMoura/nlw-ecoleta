import Knex from 'knex';

export async function up(Knex: Knex) {
    //Cria a tabela

    return Knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex) {
    //deletar a tabela
    return knex.schema.dropTable('items');
}