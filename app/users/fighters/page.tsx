import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import AddFighter from "./components/AddFighter";
import UpdateFighter from "./components/UpdateFighter";
import DeleteFighter from "./components/DeleteFighter";
import FighterList from "./components/FighterList";

const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
});

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function Home() {
  const allUsers = db.select().from(users).all();

  // console.log(process.env.DB);

  return (
    <main className="flex flex-col gap-4 my-4 px-4">
      <h1 className="text-2xl">Fighters</h1>
      <div className="flex flex-row justify-between gap-8 max-md:flex-col">
        <AddFighter />
        <UpdateFighter />
        <DeleteFighter />
      </div>
      <FighterList />
    </main>
  );
}
