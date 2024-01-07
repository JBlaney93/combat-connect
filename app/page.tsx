import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm/sqlite-core/expressions";
import Link from "next/link";
import HomePage from "./home/page";

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

  return <HomePage />;
}
