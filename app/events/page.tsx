import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import AddEvent from "./components/AddEvent";
import UpdateEvent from "./components/UpdateEvent";
import DeleteEvent from "./components/DeleteEvent";
import EventList from "./components/EventList";

const events = sqliteTable("events", {
  id: integer("id").primaryKey(),
  name: text("name"),
  location: text("location"),
  date: text("date"),
  organiser: text("organiser"),
});

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function EventHome() {
  const allEvents = db.select().from(events).all();

  return (
    <main className="flex flex-col gap-4 px-4">
      <h1 className="text-2xl">Events</h1>
      <div className="flex flex-row justify-between gap-8 max-md:flex-col">
        <AddEvent />
        <UpdateEvent />
        <DeleteEvent />
      </div>
      <EventList />
    </main>
  );
}
