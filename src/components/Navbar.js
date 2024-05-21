import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <div>
        <Link href={"/"}>Home </Link>
        <Link href={"/about"}>About </Link>
        <Link href={"/contactUs"}>ContactUs </Link>
        <Link href={"/travelPackages"}>travelPackages</Link>
      </div>
    </div>
  );
}

export default Navbar;
