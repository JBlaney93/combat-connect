import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="text-2xl bg-navBackgroundGrey">
      <div className="flex items-center gap-4 max-w-screen-xl mx-auto my-0 w-full px-6">
        <Link
          href="/"
          className="py-4 px-4 cursor-pointer hover:bg-navBackgroundGreyHover"
        >
          Combat Connect
        </Link>
        <Link
          className="py-4 px-4 cursor-pointer hover:bg-navBackgroundGreyHover"
          href="/users/fighters"
        >
          Fighters
        </Link>
      </div>
    </nav>
  );
}
