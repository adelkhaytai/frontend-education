"use client";
import React, { useState } from "react";
import ThemeToggle from "../darkMode/ThemeToggle";
import { Menu, X } from "lucide-react"; // Optional: Lucide icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className=" shadow-md p-5 ">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">FASARLI</div>

          {/* Desktop Menu */}
          <div className="hidden  md:flex space-x-4">
            <a href="#" className="text-2xl p-4  hover:text-blue-600">
              Cours
            </a>
            <a href="#" className="text-2xl p-4  hover:text-blue-600">
              A Propre
            </a>
            <a href="#" className="text-2xl p-4  hover:text-blue-600">
              Nos Offre
            </a>
            <a href="#" className="text-2xl p-4  hover:text-blue-600">
              Nos enseignants
            </a>
          </div>

          {/* user profile */}
          <div className="flex items-center space-x-4">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    // alt
                  />
                </button>
              </div>
              {/*               
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
              {isUserMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  {/* Active: "bg-gray-100 outline-hidden", Not Active: "" */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>

            {/* <a className="" href="/auth/login">Connexion</a>
            <a className="" href="/auth/login">S'inscrire</a> */}
            <ThemeToggle />

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 dark:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="#"
            className="block hover:text-blue-600"
          >
            Profile
          </a>
          <a
            href="#"
            className="block hover:text-blue-600"
          >
             A Propre
          </a>
          <a
            href="#"
            className="block hover:text-blue-600"
          >
            Nos Offre
          </a>
          <a
            href="#"
            className="block hover:text-blue-600"
          >
             Nos enseignants
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
