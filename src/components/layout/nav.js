import Link from "next/link";

const Header = () => {
  return (
    <nav className="max-w-6xl mx-auto relative py-4 flex justify-between px-4 text-sm text-neutral-400 z-20
    ">
      <div className="flex hidden sm:flex m-auto
      bg-white border border-zinc-700 w-fit p-2 rounded">
        <Link href="/"><a className="flex items-center p-1 px-2 mx-1">Dashboard</a></Link>
        <Link href="orders"><a className="flex items-center p-1 px-2 mx-1">Orders</a></Link>
        <Link href="/customers"><a className="flex items-center p-1 px-2 mx-1">Customers</a></Link>
        <Link href="/kot"><a className="flex items-center p-1 px-2 mx-1">KOTs</a></Link>
      </div>
    </nav>
)};

export default Header;