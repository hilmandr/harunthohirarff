import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { TbEye } from "react-icons/tb";
import { CgSoftwareDownload } from "react-icons/cg";
import { REGULASI_LIST } from "@/data/regulasi";

export default function Regulasi() {
  return (
    <>
      <Header />
      <div className=" flex flex-col items-center container mx-auto px-10 w-full justify-center">
        <div className=" flex w-[1000px] h-28 bg-white items-center justify-center px-7 mt-14 rounded-3xl shadow-lg shadow-gray-200">
          <h1 className=" text-5xl font-bold">REGULASI</h1>
        </div>
        <div className=" flex flex-col py-10 w-full">
          <div className=" overflow-x-auto sm:mx-6 lg:mx-8 bg-opacity-50 rounded-3xl">
            <div className=" inline-block min-w-full py-2">
              <div className=" overflow-hidden">
                <table className=" min-w-full text-left table-auto">
                  <thead className=" font-medium ">
                    <tr className=" bg-slate-300 bg-opacity-50">
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Peraturan
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Tentang
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Lihat/Unduh
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {REGULASI_LIST.map((regulasi, i) => (
                      <tr className=" bg-white text-sm" key={i}>
                        <td className="whitespace-nowrap px-6 py-4">
                          {regulasi.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {regulasi.peraturan}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {regulasi.tentang}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {regulasi.status}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 flex gap-x-2">
                          <button className=" flex w-10 h-7 bg-blue-400 rounded-full items-center justify-center hover:bg-blue-300 duration-150">
                            <regulasi.tombolLihat size={22} />
                          </button>
                          <button className=" flex w-10 h-7 bg-green-400 rounded-full items-center justify-center hover:bg-green-300 duration-150">
                            <regulasi.tombolUnduh size={22} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
