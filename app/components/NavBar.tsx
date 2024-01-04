import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex items-center text-2xl text-white gap-4 max-w-7xl mx-auto my-0">
      <Link href="/" className="py-6 px-4 cursor-pointer">
        Combat Connect
      </Link>

      <Link className="py-6 px-4 cursor-pointer" href="/users/fighters">
        Fighters
      </Link>
    </div>
  );
}
