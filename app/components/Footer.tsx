import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-center text-2xl text-accentColour gap-4 max-w-7xl mx-auto my-0">
      <Link href="/" className="py-6 px-4 cursor-pointer">
        Combat Connect
      </Link>
    </div>
  );
}
