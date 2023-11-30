import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm/sqlite-core/expressions";
import NavBar from "./components/NavBar";

const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
});

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export default function Home() {
  const allUsers = db.select().from(users).all();

  console.log(process.env.DB);

  const action = async (formData: FormData) => {
    "use server";
    await db.insert(users).values({
      firstName: formData.get("firstName")?.toString(),
      lastName: formData.get("lastName")?.toString(),
    });
    redirect("/");
  };

  const updateUserById = async (formData: FormData) => {
    "use server";
    await db
      .update(users)
      .set({ firstName: "TEST", lastName: "TEST" })
      .where(eq(users.firstName, `adam`));
    redirect("/");
  };

  // const deleteUser = async (formData: FormData) => {
  //   "use server";
  //   await db.delete(users).where(eq(user.id, formData.user.id))
  //   redirect("/");
  // }

  return (
    <>
      <NavBar />

      <main className="flex flex-col gap-8">
        <h1 className="text-2xl">Add a Fighter</h1>
        <form action={updateUserById}>
          <button type="submit" className="border-spacing-1 bg-slate-200">
            update asd
          </button>
        </form>

        <form
          className="flex flex-col gap-4 max-w-2xl p-4 border border-black rounded-sm bg-sky-100"
          action={action}
        >
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

        <div>
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
        </div>
      </main>
    </>
  );
}
