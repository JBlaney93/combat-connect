import Link from "next/link";

export default function HomePage() {
  return (
    <article className="my-8">
      <h1 className="text-4xl mb-4">Welcome to Combat Connect</h1>
      <div className="flex flex-col justify-between gap-4 text-2xl">
        <p>
          Soon you will be able to find matches in your chosen combat sports
          discipline.
        </p>
        <p>For now, you can find nothing.</p>
        <p>
          Work is currently being done in the{" "}
          <Link
            href="/users/fighters"
            className="text-6xl text-themeAccentBlue hover:text-themeAccentBlueHover"
          >
            Fighters
          </Link>{" "}
          area.
        </p>
        <p>Check it out to mess around with the database.</p>
      </div>
    </article>
  );
}
