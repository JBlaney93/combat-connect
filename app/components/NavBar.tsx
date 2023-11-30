import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-themeBlack w-screen">
      <div className="flex justify-between items-center text-xl text-accentColour px-40">
        <Link href="/">
          <Image
            src="/CombatConnectLogo.png"
            width={80}
            height={80}
            alt="Website Logo"
          />
        </Link>

        <Link href="/users/create-a-fighter">Create A Fighter</Link>

        <Link href="/users/fighter-list">Fighters</Link>

        <Link href="/events">Events</Link>

        <Link href="/users/fighter/{id}">Profile</Link>
      </div>
    </nav>
  );
}
