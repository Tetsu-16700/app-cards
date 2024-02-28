import React from "react";

function Card07() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="py-20 bg-white px-2">
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div className="absolute">
                  <div className="flex flex-col items-center">
                    <i className="fa fa-folder-open fa-4x text-blue-700" />
                    <span className="block text-gray-400 font-normal">
                      Attach you files here
                    </span>
                  </div>
                </div>
                <input
                  type="file"
                  className="h-full w-full opacity-0"
                  name=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card07;
