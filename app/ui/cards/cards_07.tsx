import React from "react";

function Card07() {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <img
          className="xl:max-w-3xl"
          src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1860"
          alt=""
        />
        <div className="content bg-white p-1 pt-4 md:p-6 pb-6 lg:max-w-lg w-full lg:absolute top-28 right-5">
          <div className="flex justify-between font-bold text-sm">
            <p>Product Review</p>
            <p className="text-gray-400">17th March, 2021</p>
          </div>
          <h2 className="text-xl font-semibold mt-4 md:mt-10">
            Coffee From Heaven
          </h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            aperiam nulla cupiditate saepe sed quis veritatis minus rem adipisci
            aliquid.
          </p>
          <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
            Read More
          </button>
        </div>
      </section>
    </section>
  );
}

export default Card07;