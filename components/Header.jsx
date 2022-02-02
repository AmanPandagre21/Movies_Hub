import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* top navbar */}

      <div className="relative w-full h-auto bg-black py-1">
        <div className="flex justify-center sm:justify-between mx-4">
          {/* left section */}

          <div className="flex justify-center items-center">
            <Link href="/">
              <Image src="/logo.png" width={80} height={50} />
            </Link>
            <h1 className="text-white uppercase font-semibold text-xl">
              <Link href="/">Movies Hub</Link>
            </h1>
          </div>

          {/* rigth section */}

          <div className="hidden md:inline-flex md:items-center">
            <ul className="flex text-green-600 uppercase font-semibold">
              <li className="px-2 text-md hover:border-b-2 border-red-600 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="px-2 text-md hover:border-b-2 border-red-600 cursor-pointer">
                <Link href="/movies">Movies</Link>
              </li>
              <li className="px-2 text-md hover:border-b-2 border-red-600 cursor-pointer">
                <Link href="/tv">Tv series</Link>
              </li>
              <li className="px-2 text-md hover:border-b-2 border-red-600 cursor-pointer">
                <Link href="/watchList">watchList</Link>
              </li>
              <li className="px-2 text-md hover:border-b-2 border-red-600 cursor-pointer">
                <Link href="/watched">Watched</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom navbar */}
    </>
  );
};

export default Header;
