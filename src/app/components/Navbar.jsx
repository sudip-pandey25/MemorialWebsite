import Link from "next/link";
import { NAV_LINKS } from "../../../constants";
import MenuBar from "./MenuBar";

const Navbar = () => {
  const isLoggedIn = false;
  return (
    <header className="sticky top-0 z-50 h-16 md:h-20 bg-gradient-to-br from-amber-50 to-blue-50 backdrop-blur-md ">
      <nav className="relative border-b shadow-sm flex items-center justify-between max-container w-full  px-4 md:px-6 lg:px-8 xl:px-12 h-full">
        {/* Desktop Navigation */}
        <Link href="/">
          <h1 className="font-playwrite text-xl md:text-2xl text-foreground font-extrabold">
            Memorability
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center regular-16 font-poppins gap-10 h-full">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-primary hover:text-amber-600 font-medium hover:underline cursor-pointer transition-all duration-300 ease-in-out"
            >
              {" "}
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex items-center font-poppins">
          {isLoggedIn ? (
            <button className="bg-foreground px-3 py-2 rounded-full hover:px-4  transition-all duration-300 ease-in-out hover:shadow-sm text-white">
              Profile
            </button>
          ) : (
            <Link href="/login">
              <button className="bg-foreground px-3 py-2 rounded-full hover:px-4  transition-all duration-300 ease-in-out hover:shadow-sm text-white">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        <MenuBar />
      </nav>
    </header>
  );
};

export default Navbar;
