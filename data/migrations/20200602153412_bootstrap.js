exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl
          .string('description')  
          .notNullable();
        tbl.text('notes');
        tbl.boolean('completed');
      })
      .createTable('contexts', tbl => {
        tbl.increments();
        tbl.text('context_description')
      })
      .createTable('tasks_contexts', tbl => {
        tbl
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references('tasks.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl
        .integer('context_id')
        .unsigned()
        .notNullable()
        .references('contexts.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.primary(['task_id', 'context_id']);
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('tasks_contexts')
      .dropTableIfExists('contexts')
      .dropTableIfExists('tasks');
  };
  