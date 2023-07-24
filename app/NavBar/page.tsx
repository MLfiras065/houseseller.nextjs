
"use client"
import {useContext} from "react";
import Link from "next/link";
const NavBar = () => {


 

 
  return (
    <nav className="navBar">
      <ul>
        <Link href="/SignIn" >Sign In </Link>
        <Link href="/SignUp">Sign Up </Link>
        <Link  href="/">Home </Link>
        <Link href="/AllProduct">All Product </Link>
        <Link href="/AboutUs">About Us </Link>
        <Link href="/AddProduct">AddProduct</Link>
    
        
      </ul>
    </nav>
  );
};

export default NavBar;
