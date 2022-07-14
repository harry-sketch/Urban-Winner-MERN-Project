import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navdata = [
    { id: 1, title: "Product", link: "/product" },
    { id: 2, title: "Update Product", link: "/update" },
    { id: 3, title: "Profile", link: "/profile" },
    { id: 4, title: "Logout", link: "/" },
  ];
  return (
    <nav className="flex w-full bg-[#191919] text-[#B0AEAE] px-[5%] py-[1%] max-w-7xl m-auto shadow-xl relative">
      <ul className="flex items-center justify-between w-2/4">
        {navdata &&
          navdata.map((item) => {
            const { title, link, id } = item;
            return (
              <li key={id}>
                <Link to={link} className="text-base font-semibold">
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
      {isOpen && <div>Dropdown</div>}
    </nav>
  );
};

export default Header;
