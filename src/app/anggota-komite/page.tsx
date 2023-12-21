import React from "react";
import Header from "@/components/header";

export default function Tentang() {
  return (
    <>
      <Header />
      <div className=" flex flex-col items-center container mx-auto px-10 w-full justify-center">
        <div className=" flex w-[1000px] h-28 bg-white items-center justify-center px-7 mt-14 rounded-3xl shadow-lg shadow-gray-200">
          <h1 className=" text-5xl font-bold">ANGGOTA KOMITE</h1>
        </div>
        <div className=" grid grid-cols-6 gap-4">
          <div className=" bg-transparent outline-stone-800 outline col-start-2 col-span-4 text-center">
            <p>PEMBINA</p>
            <p>Kepala Kantor Otoritas Bandar Udara Wilayah III</p>
          </div>
          <div className="col-start-1 col-end-3 bg-transparent outline-stone-800 outline text-center">
            <p>ANGGOTA</p>
            <p>Komando Rayon Militer</p>
          </div>
          <div className="col-end-7 col-span-2  bg-transparent outline-stone-800 outline text-center">
            <p>ANGGOTA</p>
            <p>Kantor BASARNA Sidoarjo</p>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
