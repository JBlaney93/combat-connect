import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
});

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function FighterList() {
  const allUsers = db.select().from(users).all();

  return (
    <div>
      <h2 className="text-2xl">Fighter List</h2>
      <div className="flex flex-col gap-2">
        {allUsers.map((user) => {
          return (
            <li className="list-none" id={user.id.toString()}>
              {user.id} {user.firstName} {user.lastName}
            </li>
          );
        })}
      </div>
    </div>
  );
}
