import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-6 fixed top-0 z-50">
      <div className="text-xl font-bold">MyPortfolio</div>
      <div className="flex gap-6">
        <Link href="#home" className="hover:text-blue-400">Home</Link>
        <Link href="#about" className="hover:text-blue-400">About</Link>
        <Link href="#projects" className="hover:text-blue-400">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;