import { users } from "@/app/db/schema";
import Database from "better-sqlite3";
import { eq } from "drizzle-orm/sqlite-core/expressions";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { redirect } from "next/navigation";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function DeleteFighter() {
  const deleteUserByName = async (formData: FormData) => {
    "use server";

    const id = formData.get("id");

    await db.delete(users).where(eq(users.id, Number(id)));
    redirect("/users/fighters");
  };

  return (
    <form
      className="flex flex-col w-full gap-4 p-4 border border-black rounded-sm bg-sky-100"
      action={deleteUserByName}
    >
      <h1 className="text-xl">Delete a Fighter</h1>
      <label htmlFor="id" />
      <input
        name="id"
        id="id"
        placeholder="Id of fighter to delete"
        className="p-1 max-w-sm"
      />
      <button
        type="submit"
        className="text-lg p-1  rounded-sm w-24 bg-green-500"
      >
        Delete
      </button>
    </form>
  );
}
