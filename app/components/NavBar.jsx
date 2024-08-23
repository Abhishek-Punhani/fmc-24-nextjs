import React from "react";
import Link from "next/link";

function Logo() {
  return <div className="text-white">Logo of FMC</div>;
  //image to be added instead of text
}

function Button({ children }) {
  return <button>{children}</button>;
}

function handleRegisteration() {}

const NavBar = () => {
  //css of this navbar will be changed later currently the rough work
  return (
    <>
      <div className="w-full h-20 bg-black-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo />
            </Link>

            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/aboutUs">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <p>Events</p>
                </Link>
              </li>
              <li>
                <Link href="/sponsors">
                  <p>sponsors</p>
                </Link>
              </li>
              <li>
                <Link href="/contactUs">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
            {/* <Button>
              <Link className="text-white" href="/register">
                Register
              </Link>
            </Button> */}
            {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Purple to pink
              </span>
            </button> */}
            <Link href="/register" className="text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
