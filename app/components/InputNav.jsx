"use client";

import Image from "next/image";
import { useState } from "react";

function InputNav() {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Название запроса"
        className="h-full text-[#050D23] flex-1 py-2 pl-4 pr-3 gap-3 border hover:border-[#828EAD]  focus:border-2 focus:border-[#1551E5] disabled:border-[#F0F3FC] disabled:text-[#F2F5F9] transition rounded-lg w-full"
      />
      <div className=" flex items-center gap-3 absolute top-0 right-3 bottom-0">
        <Image
          src={"/xmark.svg"}
          onClick={() => setSearch("")}
          alt="xmark"
          width={24}
          height={24}
          className="hover:cursor-pointer"
        />
        <Image
          src={"/search.svg"}
          alt="search"
          width={24}
          height={24}
          className="hover:cursor-pointer"
        />
      </div>
    </>
  );
}

export default InputNav;
