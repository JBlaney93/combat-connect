import { users } from "@/app/db/schema";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { redirect } from "next/navigation";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function AddFighter() {
  const saveFighter = async (formData: FormData) => {
    "use server";
    await db.insert(users).values({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      nickName: formData.get("nickName") as string,
      weightClass: formData.get("weightClass") as string,
    });
    redirect("/users/fighters");
  };

  return (
    <form
      className="flex flex-col w-full gap-4 p-4 border border-black rounded-sm bg-sky-100"
      action={saveFighter}
    >
      <h1 className="text-xl">Add a Fighter</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        id="firstName"
        placeholder="First Name"
        className="p-1 max-w-sm"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        className="p-1 max-w-sm"
      />
      <label htmlFor="nickName">Nickname</label>
      <input
        name="nickName"
        id="nickName"
        placeholder="Nickname"
        className="p-1 max-w-sm"
      />
      <label htmlFor="weightClass">Weightclass</label>
      <input
        name="weightClass"
        id="weightClass"
        placeholder="Weightclass"
        className="p-1 max-w-sm"
      />
      <button
        type="submit"
        className="text-lg p-1  rounded-sm w-24 bg-green-500"
      >
        Save
      </button>
    </form>
  );
}
