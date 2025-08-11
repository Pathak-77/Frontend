import { React, useState } from "react";
import { AccountIcon } from "../icon/AccountIcon";
import { CartIcon } from "../icon/CartIcon";
import { Link, useNavigate } from "react-router-dom";
import { countCartItems } from "../../store/features/cart";
import SearchIcon from "../icon/SearchIcon";
import SearchBar from "../Search/SearchBar";
import Hamburger from "../icon/Hamburger";

export default function GlassmorphNavbar({ menuOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const cartLength = countCartItems;
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const search = (slug) => {
    let url = slug ? slug : "";
    if (url === "") {
      return;
    }

    navigate(`/products/${url}`);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateUrlOnSearch = () => {
    const val = inputValue;
    const updatedValue = val
      .split("")
      .map((c) => (c === " " ? "-" : c))
      .join("");
    search(updatedValue);
  };

  const searchActivate = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed h-[53px] left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 items-center rounded-full bg-background/20 p-3 backdrop-blur-lg md:rounded-full">
      <div className="flex w-full items-center justify-between gap-3">
        {/* Hamburger menu */}
        <div
          className="flex-shrink-0 hover:cursor-pointer  hover:shadow-white/50 hover:shadow-2xl "
          onClick={menuOpen}
        >
          <Hamburger />
        </div>

        <div className="flex-shrink-0 pl-[110px]">
          <Link to='/'><h1 className="text-xl text-white font-semibold">A3THER</h1></Link>
        </div>

        {/*Search bar and icon */}
        <div className="relative flex items-center">
          <div
            className={`absolute right-[130px]  transition-all duration-300 ease-in-out ${
              isOpen
                ? "w-48 opacity-100 mr-[69px]"
                : "w-0 opacity-0 overflow-hidden"
            }`}
          >
            <SearchBar
              handleInputChange={handleInputChange}
              handleSubmit={updateUrlOnSearch}
            />
          </div>

          <ul className="flex items-center gap-6">
            <li>
              <button
                className="flex items-center justify-center p-2 rounded-full hover:shadow-xl hover:shadow-white/50 hover:cursor-pointer"
                onClick={searchActivate}
              >
                <SearchIcon />
              </button>
            </li>
            <li>
              <button
                className="p-2 rounded-full hover:shadow-xl hover:shadow-white/50 hover:cursor-pointer"
                onClick={() => navigate("/account-details/profile")}
              >
                <AccountIcon />
              </button>
            </li>
            <li>
              <Link
                to="/cart-items"
                className="relative flex items-center p-2 rounded-full hover:shadow-xl hover:shadow-white/50 hover:cursor-pointer"
              >
                <CartIcon />
                {cartLength > 0 && (
                  <div className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 w-5 bg-black text-white rounded-full border-2 border-white text-xs">
                    {cartLength}
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
