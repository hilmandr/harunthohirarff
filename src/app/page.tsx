import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FITUR_LIST } from "@/data/fitur";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className=" bg-[url('/hero.jpg')] bg-center bg-cover w-full lg:h-[820px] md:h-[550px] h-[380px] relative font-['Helvetica'] z-10">
        <div className="bg-black w-full h-full absolute -z-10 opacity-50"></div>
        <Header />

        <div className=" flex flex-col md:flex container mx-auto lg:mt-11 mt-0 px-10 text-white z-0">
          <div className=" absolute border-l-orange-900 border-l h-full ml-[1.5px] w-10 top-0 -z-10"></div>
          <p className=" font-light lg:text-xl md:text-base text-sm lg:pt-24 md:pt-24 pt-16 px-20">
            Airport Rescue & Fire Fighter Harun Thohir Airport.
          </p>
          <h1 className=" font-bold lg:text-9xl md:text-6xl text-4xl lg:pt-5 md:pt-4 pt-2 pl-[72px] border-l-4 border-l-orange-600">
            Response
          </h1>
          <h1 className=" font-bold lg:text-9xl md:text-6xl text-4xl lg:pt-5 md:pt-4 pt-2 pl-20">
            Team
          </h1>
          <div className=" flex w-full items-center justify-center mt-24">
            <IoArrowDownCircleOutline class=" animate-bounce w-14 h-14 text-orange-400 relative lg:inline-block md:hidden hidden" />
          </div>
        </div>
      </div>

      {/* APA ITU */}
      <div className=" w-full flex flex-col py-20 container mx-auto px-10 text-stone-800">
        <h1 className=" font-semibold text-5xl">
          Apa itu <span className=" text-orange-600"> PKP-PK?</span>
        </h1>
        <div className=" lg:flex-row flex-col lg:col-span-2 grid lg:grid-cols-2 grid-cols-1 mt-10 text-justify">
          <div className=" flex flex-col w-full justify-center items-center">
            <Image src="/PKP.png" alt="" width={300} height={300} />
          </div>
          <div className=" flex flex-col">
            <p className=" font-normal text-base my-5">
              Berdasarkan Keputusan Direktur Jenderal Perhubungan Udara Nomor :
              PR 30 Tahun 2022 Tentang Standar Teknis dan Operasi Peraturan
              Keselamatan Penerbangan Sipil Bagian 139 (Manual of Standard CASR
              Part 139) Volume IV Pelayanan Pertolongan Kecelakaan Penerbangan
              dan Pemadam Kebakaran (PKP-PK) disebutkan bahwa Pertolongan
              Kecelakaan Penerbangan dan Pemadam Kebakaran (PKP-PK) yang
              selanjutnya disebut PKP-PK adalah unit bagian dari penanggulangan
              keadaan darurat.
            </p>
            <p className=" font-normal text-base my-5">
              Sementara Kategori Bandar Udara untuk PKP-PK adalah tingkatan
              pelayanan PKP-PK yang dihitung berdasarkan panjang keseluruhan dan
              lebar maksimum badan Pesawat Udara terbesar yang beroperasi di
              Bandar Udara tersebut dengan mempertimbangkan jumlah
              pergerakannya.
            </p>
          </div>
        </div>
      </div>

      {/* FITUR */}
      <div className=" w-full bg-stone-100 bg-opacity-60">
        <div className=" w-full flex flex-col h-full py-20 container mx-auto px-10 text-stone-800 ">
          <h1 className=" font-semibold text-5xl text-center">
            Fitur<span className=" text-orange-600">.</span>{" "}
          </h1>
          <div className=" col-span-5 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mt-10 items-center gap-10 justify-between">
            {FITUR_LIST.map((fitur, i) => (
              <Link href={fitur.link} key={i}>
                <div className=" group hover:border-orange-600 duration-300  flex flex-col w-full h-[530px] pt-8  rounded-3xl shadow-xl shadow-gray-300 px-8 gap-y-4">
                  {<fitur.icon size={80} />}
                  <div className=" flex flex-col gap-y-1">
                    <h2 className=" font-semibold text-2xl text-left">
                      {fitur.title}
                    </h2>
                    <p className=" font-normal text-sm mt-2">
                      {fitur.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* GALERI */}
      <div className=" flex flex-col container mx-auto px-10 w-full py-20">
        <div className=" flex items-center pb-10 justify-between">
          <h1 className=" font-semibold lg:text-5xl text-2xl mb-2">
            Album <span className=" text-orange-600">Galeri.</span>
          </h1>
          <Link
            href=""
            className=" font-semibold lg:text-sm text-xs text-center lg:py-4 lg:px-12 px-4 py-2 hover:scale-105 hover:bg-white hover:border relative overflow-hidden duration-300 hover:border-orange-600 hover:text-orange-600 rounded-full bg-orange-600 text-white"
          >
            Lihat Semua
          </Link>
        </div>
        <div className=" flex-col grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
          <Link href="/" className=" flex flex-col ">
            <div className="flex w-full h-[200px] relative overflow-hidden rounded-xl group">
              <Image
                src="/sosialisasi.png"
                fill
                alt=""
                className="object-cover transform scale-125 group-hover:scale-100 duration-500 visible object-center"
              ></Image>
            </div>
            <div className=" flex flex-col text-center p-3">
              <h3 className=" font-bold hover:text-orange-600 duration-300">
                Sosialisasi APAR
              </h3>
              <h4 className=" font-light tracking-widest text-xs">
                06/12/2023
              </h4>
            </div>
          </Link>
          <Link href="/" className=" flex flex-col ">
            <div className="flex w-full h-[200px] relative overflow-hidden rounded-xl group">
              <Image
                src="/uji-response-time.jpg"
                fill
                alt=""
                className="object-cover transform scale-125 group-hover:scale-100 duration-500 visible object-center"
              ></Image>
            </div>
            <div className=" flex flex-col text-center p-3">
              <h3 className=" font-bold hover:text-orange-600 duration-300">
                Uji Response Time & Performa Kendaraan
              </h3>
              <h4 className=" font-light tracking-widest text-xs">
                06/12/2023
              </h4>
            </div>
          </Link>
          <Link href="/" className=" flex flex-col ">
            <div className="flex w-full h-[200px] relative overflow-hidden rounded-xl group">
              <Image
                src="/latihan-pemadaman.JPG"
                fill
                alt=""
                className="object-cover transform scale-125 group-hover:scale-100 duration-500 visible object-center"
              ></Image>
            </div>
            <div className=" flex flex-col text-center p-3">
              <h3 className=" font-bold hover:text-orange-600 duration-300">
                Latihan Pemadaman
              </h3>
              <h4 className=" font-light tracking-widest text-xs">
                06/12/2023
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
