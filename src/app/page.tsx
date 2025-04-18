import Link from "next/link";
import React from "react";
import NavBar from "./components/navBar/NavBar";
import ThemeToggle from "./components/darkMode/ThemeToggle";
import Home from "./pages/home/Home";

export default function page() {
  return (
    <div className="">
      <NavBar />
      {/*  */}
      <Home/>
      
    </div>
  );
}
