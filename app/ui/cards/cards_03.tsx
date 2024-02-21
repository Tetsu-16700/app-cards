import React from "react";

function Card03() {
  return (
    <div className="w-full rounded-md overflow-hidden flex flex-col shadow-md">
      <img
        className=" h-[200px]"
        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <div className="relative w-full flex flex-col justify-center items-center ">
        <div className="absolute rounded-full w-40 h-40 overflow-hidden top-[-80px]  border-white border-4">
          <img
            className="object-cover object-center h-40"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-2 mt-24 text-center">
          <h3 className="text-slate-700 font-semibold">Sarah Smith</h3>
          <p className="text-slate-400 ">Freelance Web Designer</p>
        </div>
        <div className="mt-4 flex flex-col px-4 w-full gap-4">
          <div className="flex flex-row px-4 w-full justify-between">
            <div className="flex flex-col ">
              <span>⭐</span>
              <span>2k</span>
            </div>
            <div className="flex flex-col ">
              <span>👯‍♀️</span>
              <span>10k</span>
            </div>
            <div className="flex flex-col ">
              <span>🗃️</span>
              <span>15</span>
            </div>
          </div>
          <hr />
          <div className="w-full flex mb-2 justify-center">
            <button className="bg-slate-800 text-white rounded-md px-4 py-2">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card03;
