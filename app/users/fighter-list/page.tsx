import { users } from "@/app/db/schema";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Link from "next/link";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function FighterList() {
  const allUsers = db.select().from(users).all();

  return (
    <>
      <h2 className="text-2xl mb-4">Fighter List</h2>
      <div className="flex flex-col gap-2">
        {allUsers.map((user) => {
          return (
            <li className="list-none" id={user.id.toString()}>
              {user.id} {user.firstName} {user.lastName}
            </li>
          );
        })}
      </div>
    </>
  );
}
