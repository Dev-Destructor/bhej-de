import React from "react";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div>
        <ul className="flex justify-center p-2">
          <li className="m-3 md:m-4 px-3 md:px-8 md:text-xl cursor-pointer text-gray-600 transition duration-100 transform hover:scale-125 hover:text-black">
            <Link
              to={"upload"}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              Upload
            </Link>
          </li>
          <li className="m-3 md:m-4 px-3 md:px-8 md:text-xl cursor-pointer text-gray-600 transition duration-100 transform hover:scale-125 hover:text-black">
          <Link
              to={"download"}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              Download
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
