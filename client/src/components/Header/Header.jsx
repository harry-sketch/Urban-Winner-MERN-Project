import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")).name;
  console.log(JSON.parse(localStorage.getItem("user")));

  const navdata = [
    { id: 1, title: "Product", link: "/product" },
    { id: 2, title: "Add Product", link: "/addproduct" },
    { id: 3, title: "Update Product", link: "/update" },
    { id: 4, title: `${user ? user : "Profile"}`, link: "/profile" },
    { id: 5, title: "Logout", link: "/" },
  ];

  const handleClick = () => localStorage.clear("user");
  return (
    <nav className="flex w-full bg-gradient-to-r from-[#E1B2CC] to-[#F4F4F7]  px-[5%] py-[1%]  shadow-md relative text-white">
      <ul className="flex items-center justify-between w-2/4">
        {navdata &&
          navdata.map((item) => {
            const { title, link, id } = item;
            return (
              <li key={id}>
                <Link
                  to={link}
                  className={` capitalize font-semibold text-base `}
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
