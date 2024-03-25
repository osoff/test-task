/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { footerLink, secondFooterLinks } from "../constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="max-w-[1680px] mx-auto px-6 flex flex-col pt-12 gap-12">
      <span className=" w-full border-t"></span>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-14">
          <Image
            src="/Brand.svg"
            width={205}
            height={40}
            alt="brand"
            className=" h-[40px]"
          />
          <div className="flex flex-col gap-4">
            <p className=" font-bold text-base leading-5">8 800 841-95-95</p>
            <p className=" text-xs font-normal text-[#77829E]">
              Служба поддержки
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" font-bold text-base leading-5">support@sport.ru</p>
            <p className=" text-xs font-normal text-[#77829E]">
              Служба поддержки
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {footerLink.map((link, _idx) => (
              <li key={_idx}>{link}</li>
            ))}
          </ul>
          <button
            className=" px-6 py-3 bg-[#F2F6FF] h-12 flex items-center text-[#1551E5] hover:bg-[#e4eafe] transition cursor-pointer rounded-lg"
            disabled
          >
            Предложить идею
          </button>
        </div>
      </div>
      <span className=" w-full border-t"></span>
      <div className="grid grid-cols-4">
        {secondFooterLinks.map((el, _idx) => (
          <div key={_idx}>
            <p className=" text-base font-medium">{el.lable}</p>
            <ul className="flex flex-col mt-6 gap-4">
              {el.links.map((link, __idx) => (
                <li key={__idx} className=" text-sm font-normal">
                  <Link href="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <span className=" w-full border-t"></span>
      <div className="flex flex-col gap-10 pb-12 text-[#828EAD] items-center">
        <ul className="flex gap-7 text-xs font-medium ">
          <li className="flex items-center gap-2">
            <Image src={"/file.svg"} width={16} height={16} alt="file" />
            <Link href={"/"}>PDF презентация</Link>
          </li>
          <li className="flex items-center gap-2">
            <Image src={"/video.svg"} width={16} height={16} alt="video" />
            <Link href={"/"}>Видео инструкция</Link>
          </li>
          <li className="flex items-center gap-2">
            <Image src={"/info.svg"} width={16} height={16} alt="faq" />
            <Link href={"/"}>FAQ</Link>
          </li>
          <li className="flex items-center gap-2">
            <Image src={"/yt.svg"} width={16} height={16} alt="yt" />
            <Link href={"/"} className="text-[#1551E5]">
              Мы на YouTube
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link href={"/"}>Политика конфиденциальности</Link>
          </li>
          <li className="flex items-center gap-2">
            <Link href={"/"}>Лицензионное соглашение</Link>
          </li>
        </ul>
        <p className="text-center font-normal text-xs">
          Настоящая Политика обработки персональных данных разработана в
          соответствии с Конституцией Российской Федерации, Трудовым кодексом
          Российской Федерации, Гражданским кодексом Российской Федерации,
          Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
          информационных технологиях и о защите информации",
        </p>
        <div className="flex items-center gap-6 text-sm font-bold">
          <Image
            src={"/brandbw.svg"}
            width={123}
            height={24}
            alt="brand"
            className=" h-[24px]"
          />
          <p className="text-[#8F9BB3]">Разработка платформы</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
