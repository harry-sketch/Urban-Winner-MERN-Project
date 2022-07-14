import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navdata = [
    { id: 1, title: "Product", link: "/showcase" },
    { id: 2, title: "Update Product", link: "/update" },
    { id: 3, title: "Profile", link: "/profile" },
    { id: 4, title: "Logout", link: "/logout" },
  ];
  return (
    <nav className="flex w-full bg-[#191919] text-[#B0AEAE] px-[5%] py-[2%]">
      <ul className="flex items-center justify-between w-2/4">
        {navdata &&
          navdata.map((item) => {
            const { title, link, id } = item;
            return (
              <li key={id}>
                <Link to={link}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Header;
