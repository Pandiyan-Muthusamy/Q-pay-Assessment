import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { NAV_ITEMS as navItems } from "../constants/index";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
const [isOpen, setIsOpen] = useState(false);
const [openHistory, setOpenHistory] = useState(false);

  return (
    <>
      <div
        className={`fixed top-16 h-[85%] w-64 bg-background-primary text-text-info z-40
        transform ${isOpen ? "translate-x-0" : "-translate-x-64"}
        md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between`}
      >
        <nav className="mt-4 px-3 flex-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.key} className="mb-2">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={`/${item.key}`}
                    className={({ isActive }) =>
                      `flex items-center w-full px-5 py-3 rounded-lg transition ${
                        isActive
                          ? "bg-background-info text-text-primary font-semibold shadow-md"
                          : "bg-background-primary text-text-info hover:bg-background-info hover:text-text-primary"
                      }`
                    }
                  >
                    {item.icon}
                    <span className="ml-4 text-sm">{item.name}</span>
                    <button 
                    onClick={() => setOpenHistory(!openHistory)}
                    className="px-2  mx-auto text-text-primary hover:text-text-primary"
                  >
                    {openHistory ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  </NavLink>

                </div>
                {openHistory && (
                  <div className="ml-8 mt-2 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.key}
                        to={`/${child.key}`}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                            isActive
                              ? "bg-background-info text-text-primary font-bold"
                              : "bg-background-primary text-text-info hover:bg-background-info hover:text-text-primary"
                          }`
                        }
                      >
                        {child.icon}
                        <span>{child.name}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                onClick={() => setOpenHistory(false)}
                key={item.key}
                to={`/${item.key}`}
                className={({ isActive }) =>
                  `flex items-center w-full px-5 py-3 mb-2 rounded-lg transition ${
                    isActive
                      ? "bg-background-info text-text-primary font-semibold shadow-md"
                      : "bg-background-primary text-text-info hover:bg-background-info hover:text-text-primary"
                  }`
                }
              >
                {item.icon}
                <span className="ml-4 text-sm">{item.name}</span>
              </NavLink>
            )
          )}
        </nav>
        <div className="p-4 border-t h-[5%] border-gray-200 flex justify-center bg-background-info">
          <img
            src="/assets/Bharat-Connect.png"
            alt="BharatConnect"
            className="h-8"
          />
        </div>
      </div>
      <button
        className="md:hidden fixed left-2 top-[1rem] text-text-primary p-2 rounded-md z-50"
        onClick={() => setIsOpen(!isOpen ,)}
      >
        <BiMenu size={22} />
      </button>
    </>
  );
}
