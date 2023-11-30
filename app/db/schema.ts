import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    firstName: text('first_name'),
    lastName: text('last_name'),
  }
);

export const gyms = sqliteTable('gyms', {
  id: integer('id').primaryKey(),
  name: text('name'),
  userId: integer('user_id').references(() => users.id),
})