import React from "react";

import Image from "next/image";
import Link from "next/link";

import CIRCLE from "@/../public/circle.svg";

const Header: React.FC = () => {
  return (
    <header className="text-gray-900 py-5">
      <Link href="/" className="items-center mx-auto flex">
        <Image className="w-8 mr-3" src={CIRCLE} alt="Logo" />
        <h1 className="text-xl font-bold">ACME INC.</h1>
      </Link>
    </header>
  );
};

export default Header;
