// use server

import Image from "next/image";
import Card01 from "./ui/cards/cards_01";
import Card02 from "./ui/cards/cards_02";
import Card03 from "./ui/cards/cards_03";
import Card04 from "./ui/cards/cards_04";
import Card05 from "./ui/cards/cards_05";
import Card06 from "./ui/cards/cards_06";

export default function Home() {
  return (
    <div className="flex w-full px-20 py-10 flex-col ">
      <h1 className="text-2xl font-semibold  text-center   mb-10  text-gray-700 ">
        My Cards, Fernanda
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8 ">
        <Card01></Card01>
        <Card02></Card02>
        <Card03></Card03>
        <Card04></Card04>
        <Card05></Card05>
        <Card06></Card06>
      </div>
    </div>
  );
}
