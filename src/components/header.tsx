"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LIST } from "../data/nav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className=" flex mx-auto justify-center text-white font-['Helvetica'] z-50">
        <div className=" flex xl:w-[1000px] lg:w-[1000px] w-full h-24 bg-black items-center justify-between px-7 lg:mt-10 mt-0 lg:rounded-3xl rounded-none shadow-2xl shadow-gray-950">
          {/* <div className=" flex items-center"> */}
          <Link href="/" className=" flex items-center">
            <Image
              src="/PKP.png"
              alt=""
              width={70}
              height={70}
              className=" relative"
            ></Image>
            <h1 className=" text-white pl-3 font-semibold lg:block hidden">
              ARFF BXW<br></br>HARUN THOHIR
            </h1>
          </Link>
          {/* </div> */}
          <ul className=" flex p-6 gap-10 text-white text-lg">
            {NAV_LIST.map((Navigasi, i) => (
              <Link
                href={Navigasi.link}
                className={cn("hover:text-orange-600 duration-300", {
                  " text-orange-600":
                    pathname.split("/")[1] == Navigasi.link.split("/")[1],
                })}
              >
                <li>{Navigasi.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
