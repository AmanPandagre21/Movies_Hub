import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  FilmIcon,
  DesktopComputerIcon,
  EyeIcon,
  EyeOffIcon,
} from "@heroicons/react/solid";

const BottomNav = () => {
  return (
    <>
      <nav className="md:hidden fixed bottom-0 inset-x-0 h-14 bg-black flex justify-between">
        <Link href="/">
          <a className="w-full block py-2 px-3 text-center hover:animate-pulse">
            <HomeIcon className="h-6 w-6 mx-auto text-green-600 hover:rounded-full"></HomeIcon>
            <span className="text-xs uppercase text-white font-semibold">
              HOME
            </span>
          </a>
        </Link>
        <Link href="/movies">
          <a className="w-full block py-2 px-3 text-center hover:animate-pulse">
            <FilmIcon className="h-6 w-6 mx-auto text-green-400 "></FilmIcon>
            <span className="text-xs uppercase text-white font-semibold">
              Movies
            </span>
          </a>
        </Link>
        <Link href="/tv">
          <a
            href="#"
            className="w-full block py-2 px-3 text-center hover:animate-pulse"
          >
            <DesktopComputerIcon className="h-6 w-6 mx-auto text-green-400"></DesktopComputerIcon>
            <span className="text-xs uppercase text-white font-semibold">
              TV SERIES
            </span>
          </a>
        </Link>
        <Link href="/watchList">
          <a
            href="#"
            className="w-full block py-2 px-3 text-center hover:animate-pulse"
          >
            <EyeIcon className="h-6 w-6 mx-auto text-green-400"></EyeIcon>
            <span className="text-xs uppercase text-white font-semibold">
              Watch List
            </span>
          </a>
        </Link>
        <Link href="/watched">
          <a
            href="#"
            className="w-full block py-2 px-3 text-center hover:animate-pulse"
          >
            <EyeOffIcon className="h-6 w-6 mx-auto text-green-400"></EyeOffIcon>
            <span className="text-xs uppercase text-white font-semibold">
              Watched
            </span>
          </a>
        </Link>
      </nav>
    </>
  );
};

export default BottomNav;
