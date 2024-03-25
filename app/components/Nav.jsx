import Image from "next/image";
import { navLink } from "../constants";
import Link from "next/link";
import InputNav from "./InputNav";

function Nav() {
  return (
    <>
      <nav className="py-4 px-6 flex gap-6 items-center">
        <div className="flex flex-1 items-center gap-6 ">
          <Image
            src={"/Brand.svg"}
            priority
            width={144}
            height={28}
            alt="Logo"
            className=" h-[28px]"
          />
          <button className="mainbtn flex items-center justify-center h-12 gap-3">
            <Image src={"/Icon.svg"} width={24} height={24} alt="svg" />
            <p>Меню</p>
          </button>
          <div className="relative h-12 max-w-[731px] w-full">
            <InputNav />
          </div>
        </div>
        <div className="flex items-center gap-6 ">
          <div className="flex items-center ">
            <Image
              src={"/alert.svg"}
              width={32}
              height={32}
              alt="notifications"
              className="mr-6 "
            />
            <span className="border-r w-[1px] h-[48px]"></span>
            <Image
              src={"/like.svg"}
              alt="liked"
              width={32}
              height={32}
              className="ml-6"
            />
          </div>
          <button
            className=" px-6 py-3 bg-[#F2F6FF] h-12 flex items-center text-[#1551E5] hover:bg-[#e4eafe] transition cursor-pointer rounded-lg"
            disabled
          >
            <span className="flex items-center gap-3">
              <Image src={"/Card.svg"} width={24} height={24} alt="card" />
              144 235₽
            </span>
          </button>
          <div className="flex items-center gap-4 cursor-pointer text-[#071435]">
            <Image src={"/Avatar.svg"} alt="Avatar" width={32} height={32} />
            <p>Ермаков Е.</p>
            <Image
              src={"/downArrow.svg"}
              height={24}
              width={24}
              alt="downarr"
            />
          </div>
        </div>
      </nav>
      <nav className="flex items-center justify-between py-3 px-6 gap-16 border-t border-b h-[56px]">
        <ul className="flex items-center gap-16 text-[#071435] ">
          {navLink.map((link) => (
            <li key={link}>
              <Link href="/">{link}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-6 text-[#1551E5] ">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 bg-[#F2F6FF]  py-2 px-3 rounded-[4px] transition"
            >
              <Image
                src={"/message.svg"}
                alt="message"
                width={16}
                height={16}
              />
              Ваш менеджер
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:bg-[#F2F6FF] py-2 px-3 rounded-[4px] transition"
            >
              % Акции
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:bg-[#F2F6FF] py-2 px-3 rounded-[4px] transition"
            >
              Блог
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
