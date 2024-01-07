import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto text-2xl text-accentColour gap-4 bg-navBackgroundGrey">
      <div className="flex items-center justify-center gap-4 max-w-screen-xl mx-auto my-0 w-full px-6">
        <Link
          href="/"
          className="py-4 px-4 cursor-pointer hover:bg-navBackgroundGreyHover"
        >
          Combat Connect
        </Link>
      </div>
    </footer>
  );
}
