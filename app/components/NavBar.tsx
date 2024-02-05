import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="text-xl bg-navBackgroundRaisinBlack">
      <div className="flex justify-evenly">
        <Link
          href="/"
          className="py-4 px-4 font-bold text-slate-50 cursor-pointer hover:text-yellow-500 hover:bg-slate-500">
          Combat Connect
        </Link>
        <div className="flex gap-4">
          <Link
            className="py-4 px-4 text-slate-50 cursor-pointer hover:text-yellow-500 hover:bg-slate-500"
            href="/users/fighters">
            Fighters
          </Link>
          <Link
            className="py-4 px-4 text-slate-50 cursor-pointer hover:text-yellow-500 hover:bg-slate-500"
            href="/events">
            Event
          </Link>
        </div>
        <Link
          className="py-4 px-4 text-slate-50 cursor-pointer hover:text-yellow-500 hover:bg-slate-500"
          href="/">
          Log Out
        </Link>
      </div>
    </nav>
  );
}
