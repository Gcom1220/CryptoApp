import React from "react";
import { GiCoins, GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location);

  return (
    <header className="flex justify-between h-20 text-4xl font-lobster bg-blue-300 p-4">
      <Link to="/">
        <div className="flex justify-center items-center">
          <GiCoins /> <span className="text-slate-400 text-lg">my</span>{" "}
          Crypto.App
        </div>
      </Link>

      <div>{location.pathname === "/" && <BsSearch />}</div>
      <div className="flex justify-between items-center w-20">
        <GiHamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
