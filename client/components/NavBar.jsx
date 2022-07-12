import React from "react";

function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center p-2">
        <li className="m-3 md:m-4 px-3 md:px-8 md:text-xl cursor-pointer text-gray-600 transition duration-100 transform hover:scale-125 hover:text-black">
          <a href="#home">Home</a>
        </li>
        <li className="m-3 md:m-4 px-3 md:px-8 md:text-xl cursor-pointer text-gray-600 transition duration-100 transform hover:scale-125 hover:text-black">
          <a href="#upload">Upload</a>
        </li>
        <li className="m-3 md:m-4 px-3 md:px-8 md:text-xl cursor-pointer text-gray-600 transition duration-100 transform hover:scale-125 hover:text-black">
          <a href="#download">Download</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
