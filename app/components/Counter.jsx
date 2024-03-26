"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useKey } from "../hooks/useKey";

function Counter() {
  const [count, setCount] = useState(0);
  const [edit, setEdit] = useState(false);
  useKey("Enter", () => setEdit(false));
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
  useEffect(() => {
    if (count === 0) {
      setEdit(false);
    }
  }, [count]);

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
      <div className="border-2 relative countShadow rounded-lg border-[#1551E5] flex justify-between py-2 pr-3 pl-4 gap-12 h-full items-center w-full transition-all">
        <button
          onClick={() => setCount((state) => state - 1)}
          className="absolute left-2 top-0 bottom-0"
        >
          <Image src={"/minus.svg"} width={24} height={24} alt="" />
        </button>
        {edit && (
          <input
            type="number"
            onBlur={(e) => {
              setEdit(false);
            }}
            className="unnumber absolute text-base font-medium  w-16 text-center left-1/2 transform -translate-x-1/2"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            autoFocus
          />
        )}
        {!edit && (
          <p
            onClick={() => setEdit(true)}
            className="text-base font-medium absolute left-1/2 transform -translate-x-1/2"
          >
            {count + chooseWord(count)}
          </p>
        )}
        <button
          onClick={() => setCount((state) => state + 1)}
          className="absolute right-2 top-0 bottom-0"
        >
          <Image src={"/plus.svg"} width={24} height={24} alt="" />
        </button>
      </div>
    );
  }
}

export default Counter;
