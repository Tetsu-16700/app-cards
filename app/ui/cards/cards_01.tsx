"use client";

import { useState } from "react";

function Card01() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: "",
      name: "",
      description: "",
    },
  ]);
  const [shadow, setShadow] = useState([]);
  function handleNext(id: number) {}
  function handlePrev(id: number) {}

  return (
    <div className="w-full bg-white shadow-md rounded-md border px-4 py-2">
      <header>
        <nav className="flex justify-between">
          {/* ------- */}
          <div className="flex items-center gap-8">
            <img
              src="https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=cn"
              alt=""
              className="invert w-10"
            />
            <span className="text-gray-400">Character</span>
          </div>
          {/* ----------- */}
          <div>
            <div className="bg-gray-100 rounded-3xl p-2 flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="fill-gray-400"
                    d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
              <input
                className="w-28 bg-gray-100 outline-none"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          {/* -------------- */}
          {/* *------------------- */}

          <div className="flex items-center gap-2">
            <span>Menu</span>
            <span>✅</span>
          </div>
        </nav>
      </header>
      {/* ----------------- */}
      <main className="mt-4 flex gap-8">
        {/* item */}
        <div className="w-40 h-[15rem]  rounded-2xl  flex flex-col relative justify-end ">
          <img
            className="absolute mb-[60%] drop-shadow-lg"
            src="https://i.pinimg.com/originals/2a/34/fa/2a34fa548c2244812f5841e69fa4226d.png"
            alt=""
          />
          <div className="w-full h-36 bg-yellow-500 rounded-2xl text-white px-4 pb-4 flex items-end shadow-lg">
            <div>
              <h2 className="text-xl font-semibold">Antony</h2>
              <p className="text-sm">El es Antony!</p>
            </div>
          </div>
        </div>
        {/* end item */}
        <div className="w-40 h-[15rem]  rounded-2xl  flex flex-col relative justify-end ">
          <img
            className="absolute mb-[60%] drop-shadow-lg"
            src=" https://s3.us-west-2.amazonaws.com/stamped.io/uploads/productImages/66552_7364360175790.png "
            alt=""
          />
          <div className="w-full h-28 bg-red-500 rounded-2xl text-white px-4 pb-4 flex items-end shadow-lg">
            <div>
              <h2 className="text-xl font-semibold">Bombon</h2>
              <p className="text-sm">Es una chica superpoderosa</p>
            </div>
          </div>
        </div>
        {/* end item */}
        <div className="w-40 h-[15rem]  rounded-2xl  flex flex-col relative justify-end ">
          <img
            className="absolute mb-[60%] drop-shadow-lg"
            src="https://2.bp.blogspot.com/-odsf0uhoCDI/U__Strl6QeI/AAAAAAAAhcs/63Kd_tEYVGw/s1600/GumballOverlay2.png  "
            alt=""
          />
          <div className="w-full h-32 bg-sky-500 rounded-2xl text-white px-4 pb-4 flex items-end shadow-lg">
            <div>
              <h2 className="text-xl font-semibold">Gumball</h2>
              <p className="text-sm">Es un personaje</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-8 flex justify-between text-xs">
        <div className="flex gap-8 text-gray-300">
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
        <div className="flex gap-4 font-semibold ">
          <span>{"< Prev"}</span>
          <span>{"Next >"}</span>
        </div>
      </footer>
    </div>
  );
}

export default Card01;
