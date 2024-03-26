"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function chooseWord(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
      return " штука";
    } else if (
      count % 10 >= 2 &&
      count % 10 <= 4 &&
      (count % 100 < 10 || count % 100 >= 20)
    ) {
      return " штуки";
    } else {
      return " штук";
    }
  }

  if (count <= 0) {
    return (
      <button
        className="mainbtn h-full text-sm  flex gap-3 items-center justify-center w-full"
        onClick={() => setCount((count) => count + 1)}
      >
        <Image
          src={"/cardWhite.svg"}
          width={24}
          height={24}
          alt="card"
          className=" h-[24px]"
        />
        В корзину
      </button>
    );
  } else {
    return (
      <div className="border-2  countShadow rounded-lg border-[#1551E5] flex justify-between py-2 pr-3 pl-4 gap-12  h-full  items-center w-full">
        <button onClick={() => setCount((state) => state - 1)}>
          <Image src={"/minus.svg"} width={24} height={24} alt="" />
        </button>
        <p className=" text-base font-medium">{count + chooseWord(count)}</p>
        <button onClick={() => setCount((state) => state + 1)}>
          <Image src={"/plus.svg"} width={24} height={24} alt="" />
        </button>
      </div>
    );
  }
}

export default Counter;
