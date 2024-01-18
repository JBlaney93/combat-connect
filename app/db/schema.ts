import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    firstName: text('first_name'),
    lastName: text('last_name'),
    nickName: text('nick_name'),
    weightClass: text('weight_class'),
  }
);

export const gyms = sqliteTable('gyms', {
  id: integer('id').primaryKey(),
  name: text('name'),
  userId: integer('user_id').references(() => users.id),
})

export const events = sqliteTable('events', {
  id: integer('id').primaryKey(),
  name: text('name'),
  location: text('location'),
  date: text('date'),
  organiser: text('organiser'), // promoter?
});

export const usersToEvent = sqliteTable('events_users', {
  userId: integer('user_id').references(() => users.id),
  eventId: integer('event_id').references(() => events.id),
});