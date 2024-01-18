import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const events = sqliteTable("events", {
  id: integer("id").primaryKey(),
  name: text("name"),
  location: text("location"),
  date: text("date"),
  organiser: text("organiser"),
});

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

type Event = {
  id: number;
  name: string;
  location: string;
  date: string;
  organiser: string;
};

export default function EventList() {
  const allEvents = db.select().from(events).all() as Event[];

  return (
    <div>
      <h2 className="text-2xl">Event List</h2>
      <div className="flex flex-col gap-2">
        {allEvents.map((event) => {
          return (
            <li className="list-none" key={event.id}>
              {event.id} {event.name}
              {event.location}
              {event.date}
              {event.organiser}
            </li>
          );
        })}
      </div>
    </div>
  );
}
