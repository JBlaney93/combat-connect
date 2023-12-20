import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm/sqlite-core/expressions";
import Link from "next/link";

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
      <h1 className="text-4xl">Welcome to Combat Connect</h1>
      <div className="flex flex-col justify-between gap-4 text-2xl">
        <p>
          Soon you will be able to find matches in your chosen combat sports
          discipline.
        </p>
        <p>For now, you can find nothing.</p>
        <p>
          Work is currently being done in the{" "}
          <Link href="/users/fighters" className="text-6xl text-blue-400">
            Fighters
          </Link>{" "}
          area.
        </p>
        <p>Check it out to mess around with the database.</p>
      </div>
    </main>
  );
}
