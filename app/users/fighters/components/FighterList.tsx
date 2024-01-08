import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  nickName: text("nick_name"),
  weightClass: text("weight_class"),
});

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

type Fighter = {
  id: number;
  firstName: string;
  lastName: string;
  nickName: string;
  weightClass: string;
};

export default function FighterList() {
  const allUsers = db.select().from(users).all() as Fighter[];

  return (
    <div>
      <h2 className="text-2xl">Fighter List</h2>
      <div className="flex flex-col gap-2">
        {allUsers.map((user) => {
          return (
            <li className="list-none" key={user.id}>
              {user.id} {user.firstName} "{user.nickName}" {user.lastName}{" "}
              {user.weightClass}
            </li>
          );
        })}
      </div>
    </div>
  );
}
