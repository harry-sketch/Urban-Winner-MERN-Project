import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navdata = [
    { id: 1, title: "Product", link: "/product" },
    { id: 2, title: "Update Product", link: "/update" },
    { id: 3, title: "Profile", link: "/profile" },
    { id: 4, title: "Logout", link: "/" },
  ];

  const handleClick = () => {
    console.log("click logout");
    localStorage.clear("user");
  };
  return (
    <nav className="flex w-full bg-gradient-to-r from-[#E1B2CC] to-[#F4F4F7]  px-[5%] py-[1%]  shadow-xl relative text-white">
      <ul className="flex items-center justify-between w-2/4">
        {navdata &&
          navdata.map((item) => {
            const { title, link, id } = item;
            return (
              <li key={id}>
                <Link
                  to={link}
                  className="text-base font-semibold"
                  onClick={() => {
                    if (item.link === "/") return handleClick();
                  }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Header;
