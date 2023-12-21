import React from "react";
import Header from "@/components/header";

export default function Tentang() {
  return (
    <>
      <Header />
      <div className=" flex flex-col items-center container mx-auto px-10 w-full justify-center">
        <div className=" flex w-[1000px] h-28 bg-white items-center justify-center px-7 mt-14 rounded-3xl shadow-lg shadow-gray-200">
          <h1 className=" text-5xl font-bold">TENTANG</h1>
        </div>
      </div>
    </>
  );
}
