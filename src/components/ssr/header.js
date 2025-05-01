import Link from "next/link";
import Image from "next/image";
import MobileMenuClient from "@/components/csr/MobileMenuClient";

const links = [
  { name: "হোম", href: "/" },
  { name: "ই-কমার্স ওয়েবসাইট", href: "/" },
  { name: "ল্যান্ডিং পেজ", href: "/" },
  { name: "ডিজিটাল মার্কেটিং", href: "/" },
  { name: "প্রাইসিং", href: "/" },
  { name: "আমাদের সম্পর্কে", href: "/" },
  { name: "যোগাযোগ", href: "/" },
];

const HeaderServer = () => {
  return (
    <header className="bg-black fixed w-full z-100">
      <nav className="xl:container xl:mx-auto px-3 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <div className="w-22 z-50">
          <Link href="/">
            <Image
              src="/Topper-IT-Logo-149x74.png"
              alt="MySite Logo"
              width={128}
              height={40}
              priority
            />
          </Link>
        </div>
        <h1 className={"text-gray-100 text-md font-semibold lg:hidden"}>
          Welcome to Topper IT
        </h1>
        {/* Desktop Menu */}
        <ul className="lg:flex items-center justify-end gap-6 font-bold hidden text-white">
          {links.map((link, i) => (
            <li className="relative group" key={i}>
              <Link href={link.href}>{link.name}</Link>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full" />
            </li>
          ))}
          <li className="relative group">
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600"
            >
              WhatsApp
            </a>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full" />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <MobileMenuClient links={links} />
      </nav>
    </header>
  );
};

export default HeaderServer;
