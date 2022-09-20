import { GiCoins,GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

function Header() {
    return (
        <header className="flex justify-between h-20 text-4xl font-lobster p-4">
            <div className="flex justify-center items-center">
                <GiCoins /> <span className="text-slate-400">my</span> CryptoApp
            </div>
            <div className="flex justify-between items-center w-20">
                <BsSearch />
                <GiHamburgerMenu />
            </div>
        </header>
    );
}

export default Header;
