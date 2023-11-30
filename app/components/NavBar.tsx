import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-slate-50 w-full">
      <div className="flex justify-between items-center text-xl text-accentColour px-7 h-20 max-w-7xl">
        <Link href="/" className="py-4 px-2">
          {/* <Image src="" width={80} height={80} alt="Website Logo" /> */}
          Combat Connect
        </Link>

        <Link href="/users/fighter-list">Fighters</Link>
      </div>
    </nav>
  );
}
