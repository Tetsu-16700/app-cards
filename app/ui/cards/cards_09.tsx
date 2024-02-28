import React from "react";

function Card09() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
      />
      <div className="text-center mt-20">
        <label className="text-lg font-semibold">Choose Date</label> <br />
        <input
          id="datepicker"
          className="border-2 border-gray-300 rounded px-3 py-2 w-56"
          type="text"
          placeholder="Select a date"
        />
      </div>
    </>
  );
}

export default Card09;
