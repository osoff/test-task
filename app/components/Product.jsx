import Image from "next/image";
import { prodImgs, specifications } from "../constants";
import Like from "./Like";
import Counter from "./Counter";

function Product() {
  return (
    <section className="flex flex-col gap-8 ">
      <h2 className=" uppercase text-[32px] leading-[32px]">
        Кроссовки мужские Skechers Sunny Dale
      </h2>
      <div className="flex gap-12">
        <div className="flex flex-col gap-6">
          <Image
            width={400}
            height={400}
            alt="MainHero"
            src={"/mainImage.png"}
            priority
            className=" rounded-2xl object-cover h-[400px] "
          />
          <div className="flex w-full justify-between">
            <button className="bg-[#F2F6FF] py-2 rounded-lg hover:bg-[#e4eafe] transition cursor-pointer">
              <Image src={"/mainArr.svg"} alt="arr" width={32} height={32} />
            </button>
            {prodImgs.map((img) => (
              <button key={img}>
                <Image height={64} width={64} alt="subProd" src={"/img1.svg"} />
              </button>
            ))}

            <button className="bg-[#F2F6FF] py-2 rounded-lg rotate-180 hover:bg-[#e4eafe] transition cursor-pointer">
              <Image src={"/mainArr.svg"} alt="arr" width={32} height={32} />
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-12 flex-1">
          <div className=" flex gap-12 items-center ">
            <div className="flex flex-col gap-8 flex-1 max-w-[372px]">
              <div className="flex flex-col">
                <p className=" text-[#FF3D71]">166 534.00 цена без скидки</p>
                <div className=" text-[32px] leading-[48px] mt-6 flex items-center gap-4 font-bold">
                  122 566 ₽
                  <span className=" text-base  bg-[#FF3D71] rounded-[4px] py-[2px] px-2 text-white ">
                    -15%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="bg-[#F2F5F9] text-[#828EAD] font-bold p-2 rounded-lg">
                  12 штук в уп.
                </p>
                <label className="flex items-center  cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[#828EAD] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium">
                    Заказ упаковкой
                  </span>
                </label>
              </div>
              <span className=" border-b "></span>
              <div className=" grid grid-cols-3 items-center gap-4 ">
                <p className="flex flex-col gap-1 leading-4 font-normal text-[#828EAD]  text-[12px]">
                  <span className=" font-bold text-[#071435] text-[14px]">
                    Завтра
                  </span>
                  Доставка
                </p>
                <p className="flex flex-col gap-1 leading-4 font-normal text-[#828EAD]  text-[12px]">
                  <span className=" font-bold text-[#071435] text-[14px]">
                    7 шт.
                  </span>
                  Тарасовка
                </p>
                <p className="flex flex-col gap-1 leading-4 font-normal text-[#828EAD]  text-[12px]">
                  <span className=" font-bold text-[#071435] text-[14px]">
                    7 шт.
                  </span>
                  Тарасовка
                </p>
              </div>
              <div className="flex items-center h-14 gap-6">
                <Counter />
                <Like />
              </div>
            </div>
            <span className=" border-r h-full"></span>
            <div className=" flex flex-col gap-8 flex-1">
              <p className=" text-xl font-medium leading-5">Характеристики</p>
              <div className="grid grid-cols-2 grid-flow-row gap-6 w-full">
                {specifications.map((el, _id) => (
                  <div key={_id} className="flex flex-col gap-4">
                    <p className=" text-sm font-bold leading-4">{el.lable}</p>
                    <p className=" text-xs font-normal text-[#828EAD]">
                      {el.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-6 leading-7">
            <h3 className=" text-2xl  font-medium">Описание товара</h3>
            <p className=" font-light text-lg">
              Создание приверженного покупателя специфицирует неопровержимый
              комплексный анализ ситуации. CTR существенно индуцирует из ряда
              вон выходящий SWOT-анализ. Воздействие на потребителя определяет
              возрастающий интеграл по поверхности, что известно даже
              школьникам. Отсюда естественно следует, что коммуникация
              уравновешивает косвенный фактор коммуникации. Поле направлений
              естественно допускает экспериментальный скачок функции, таким
              образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул
              лояльных изданий.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
