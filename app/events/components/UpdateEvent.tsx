import { events } from "@/app/db/schema";
import Database from "better-sqlite3";
import { eq } from "drizzle-orm/sqlite-core/expressions";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { redirect } from "next/navigation";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function UpdateEvent() {
  const updateEventByName = async (formData: FormData) => {
    "use server";

    const name = formData.get("name")?.toString();
    const updatedName = formData.get("name")?.toString();

    await db
      .update(events)
      .set({ name: `${updatedName}` })
      .where(eq(events.name, `${name}`));
    redirect("/events");
  };

  return (
    <form
      className="flex flex-col w-full gap-4 p-4 border border-black rounded-sm bg-sky-100"
      action={updateEventByName}>
      <h1 className="text-xl">Update Event</h1>
      <label htmlFor="name" />
      <input
        name="name"
        id="name"
        placeholder="Name"
        className="p-1 max-w-sm"
      />
      <label htmlFor="location">Location</label>
      <input
        name="location"
        id="location"
        placeholder="location"
        className="p-1 max-w-sm"
      />
      <label htmlFor="date">Date</label>
      <input
        name="date"
        id="date"
        placeholder="date"
        className="p-1 max-w-sm"
      />
      <label htmlFor="organiser">Organiser</label>
      <input
        name="organiser"
        id="organiser"
        placeholder="organiser"
        className="p-1 max-w-sm"
      />
      <button
        type="submit"
        className="text-lg p-1 rounded-sm w-24 bg-green-500">
        Update
      </button>
    </form>
  );
}
