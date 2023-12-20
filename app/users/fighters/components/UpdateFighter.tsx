import { users } from "@/app/db/schema";
import Database from "better-sqlite3";
import { eq } from "drizzle-orm/sqlite-core/expressions";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { redirect } from "next/navigation";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function UpdateFighter() {
  const updateUserByName = async (formData: FormData) => {
    "use server";

    const firstName = formData.get("firstName")?.toString();
    const updatedFirstName = formData.get("updatedFirstName")?.toString();

    await db
      .update(users)
      .set({ firstName: `${updatedFirstName}` })
      .where(eq(users.firstName, `${firstName}`));
    redirect("/users/fighters");
  };

  return (
    <form
      className="flex flex-col w-full gap-4 p-4 border border-black rounded-sm bg-sky-100"
      action={updateUserByName}
    >
      <h1 className="text-xl">Update a Fighter</h1>
      <label htmlFor="firstName" />
      <input
        name="firstName"
        id="firstName"
        placeholder="First Name"
        className="p-1 max-w-sm"
      />
      <label htmlFor="updatedFirstName" />
      <input
        name="updatedFirstName"
        id="updatedFirstName"
        placeholder="New First Name"
        className="p-1 max-w-sm"
      />
      <button
        type="submit"
        className="text-lg p-1  rounded-sm w-24 bg-green-500"
      >
        Update
      </button>
    </form>
  );
}
