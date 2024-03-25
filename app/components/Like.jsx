"use client";

import Image from "next/image";
import { useState } from "react";

function Like() {
  const [like, setLike] = useState(false);
  return (
    <button
      className="py-4 px-6 rounded-lg h-full bg-[#F2F6FF] flex items-center  hover:bg-[#e4eafe] transition cursor-pointer"
      onClick={() => setLike((isLike) => !isLike)}
    >
      {!like && (
        <Image
          src={"/likeblue.svg"}
          width={24}
          height={24}
          alt="like"
          className=" max-w-none h-[24px]"
        />
      )}
      {like && (
        <Image
          src={"/likered.svg"}
          width={24}
          height={24}
          alt="like"
          className=" max-w-none h-[24px]"
        />
      )}
    </button>
  );
}

export default Like;
