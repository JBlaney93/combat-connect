import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm/sqlite-core/expressions";

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

  const action = async (formData: FormData) => {
    "use server";
    await db.insert(users).values({
      firstName: formData.get("firstName")?.toString(),
      lastName: formData.get("lastName")?.toString(),
    });
    redirect("/");
  };

  const updateUserByName = async (formData: FormData) => {
    "use server";

    const firstName = formData.get("firstName")?.toString();
    const updatedFirstName = formData.get("updatedFirstName")?.toString();

    await db
      .update(users)
      .set({ firstName: `${updatedFirstName}` })
      .where(eq(users.firstName, `${firstName}`));
    redirect("/");
  };

  const deleteUserByName = async (formData: FormData) => {
    "use server";

    const firstName = formData.get("firstName")?.toString();

    await db.delete(users).where(eq(users.firstName, `${firstName}`));
    redirect("/");
  };

  return (
    <main className="flex flex-col gap-4 my-4 px-4">
      <h1 className="text-2xl">Fighters</h1>
      <div className="flex flex-row justify-between gap-8 max-md:flex-col">
        <form
          className="flex flex-col w-full gap-4 p-4 border border-black rounded-sm bg-sky-100"
          action={action}
        >
          <h1 className="text-xl">Add a Fighter</h1>
          <label htmlFor="firstName" />
          <input
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="p-1 max-w-sm"
          />
          <label htmlFor="lastName" />
          <input
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="p-1 max-w-sm"
          />
          <button
            type="submit"
            className="text-lg p-1  rounded-sm w-24 bg-green-500"
          >
            Save
          </button>
        </form>
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
        <form
          className="flex flex-col w-full gap-4 p-4 border border-black rounded-sm bg-sky-100"
          action={deleteUserByName}
        >
          <h1 className="text-xl">Delete a Fighter</h1>
          <label htmlFor="firstName" />
          <input
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="p-1 max-w-sm"
          />
          <button
            type="submit"
            className="text-lg p-1  rounded-sm w-24 bg-green-500"
          >
            Delete
          </button>
        </form>
      </div>
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
    </main>
  );
}
