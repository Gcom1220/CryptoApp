import { GiCoins, GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Link to="/">
            <header className="flex justify-between h-20 text-4xl font-lobster p-4">
                <div className="flex justify-center items-center">
                    <GiCoins /> <span className="text-slate-400">my</span>{" "}
                    Crypto.App
                </div>
                <div className="flex justify-between items-center w-20">
                    <BsSearch />
                    <GiHamburgerMenu />
                </div>
            </header>
        </Link>
    );
}

export default Header;
