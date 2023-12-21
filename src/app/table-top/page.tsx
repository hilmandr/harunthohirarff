"use client";
import Link from "next/link";
import React, { Component } from "react";
import { Stage, Layer, Image, Rect, Transformer } from "react-konva";
import useImage from "use-image";
import { useState, useRef, LegacyRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { IoWaterOutline } from "react-icons/io5";
import { TbFlipVertical } from "react-icons/tb";
import { Image as IImageRef } from "konva/lib/shapes/Image";
import { Transformer as ITransformerRef } from "konva/lib/shapes/Transformer";
import { FaFire } from "react-icons/fa";

export default function TableTop() {
  const [ft] = useImage("/FT.png");
  const [ftIsSpray] = useImage("/FT-spray.png");
  const [isDraggingFt, setIsDraggingFt] = useState(false);
  const [isSelectedFt, setIsSelectedFt] = useState<boolean>(false);
  const [isDraggingSusi, setIsDraggingSusi] = useState(false);
  const [susi] = useImage("/aircraft.png");
  const [susiIsFire] = useImage("/aircraft-burn.png");
  const [riv] = useImage("/RIV.png");
  const [isSelectedRiv, setIsSelectedRiv] = useState<boolean>(false);
  const [ambulance] = useImage("/ambulance.png");
  const [isSelectedAmb, setIsSelectedAmb] = useState<boolean>(false);
  const [isSpraying, setIsSpraying] = useState(false);
  const [isGoesOut, setIsGoesOut] = useState(false);
  const [isScaleX, setIsScaleX] = useState<boolean>(false);

  const transformerRefFt = useRef<ITransformerRef>(null);
  const transformerRefRiv = useRef<ITransformerRef>(null);
  const transformerRefAmb = useRef<ITransformerRef>(null);
  const imageRefFt = useRef<IImageRef>(null);
  const imageRefRiv = useRef<IImageRef>(null);
  const imageRefAmb = useRef<IImageRef>(null);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    console.log("test");
  }, []);

  useEffect(() => {
    if (isSelectedFt) {
      transformerRefFt.current!.nodes([imageRefFt.current!]);
      transformerRefFt.current!.getLayer()!.batchDraw();
    }
  }, [isSelectedFt]);
  useEffect(() => {
    if (isSelectedRiv) {
      transformerRefRiv.current!.nodes([imageRefRiv.current!]);
      transformerRefRiv.current!.getLayer()!.batchDraw();
    }
  }, [isSelectedRiv]);
  useEffect(() => {
    if (isSelectedAmb) {
      transformerRefAmb.current!.nodes([imageRefAmb.current!]);
      transformerRefAmb.current!.getLayer()!.batchDraw();
    }
  }, [isSelectedAmb]);

  return (
    <>
      <body className=" fixed">
        <div className=" absolute z-10 w-full h-fit">
          {isGoesOut && (
            <div className=" absolute left-0 top-0 flex flex-row-reverse gap-2.5 p-2.5">
              <button
                onClick={() => setIsScaleX(!isScaleX)}
                className={cn(
                  " z-50 flex h-8 w-8 items-center justify-center rounded-lg border bg-white text-black",
                  { "border-black bg-black text-white": isScaleX }
                )}
              >
                <TbFlipVertical size={16} />
              </button>
              <button
                onClick={() => setIsDraggingSusi(!isDraggingSusi)}
                className={cn(
                  " z-50 flex h-8 w-8 items-center justify-center rounded-lg border bg-white text-black",
                  { "border-red-500 bg-red-500 text-white": isDraggingSusi }
                )}
              >
                <FaFire size={16} />
              </button>
            </div>
          )}
          {isDraggingFt && (
            <div className=" absolute left-0 top-10 flex flex-row-reverse gap-2.5 p-2.5">
              <button
                onClick={() => {
                  setIsSpraying(!isSpraying);
                }}
                className={cn(
                  " z-50 flex h-8 w-8 items-center justify-center rounded-lg border bg-white text-black",
                  { "border-blue-500 bg-blue-500 text-white": isSpraying }
                )}
              >
                <IoWaterOutline size="16" />
              </button>
            </div>
          )}
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Image
                image={isGoesOut ? (isDraggingSusi ? susiIsFire : susi) : susi}
                unoptimized
                x={isScaleX ? (isScaleX ? 200 : 1250) : 1250}
                // x={1250}
                y={10}
                scaleX={isScaleX ? (isScaleX ? -1 : 1) : 1}
                draggable={isGoesOut}
                width={200}
                height={160}
                onClick={() => {
                  setIsGoesOut(!isGoesOut);
                }}
              />
              <Image
                image={isSpraying ? (isSpraying ? ftIsSpray : ft) : ft}
                x={617}
                y={435}
                draggable={isDraggingFt}
                width={25}
                height={140}
                ref={imageRefFt}
                onClick={() => {
                  setIsDraggingFt(!isDraggingFt);
                  setIsSelectedFt(!isSelectedFt);
                }}
              />
              {isSelectedFt && <Transformer ref={transformerRefFt} />}
              <Image
                image={riv}
                x={695}
                y={500}
                draggable
                width={25}
                height={70}
                ref={imageRefRiv}
                onClick={() => {
                  setIsSelectedRiv(!isSelectedRiv);
                }}
              />
              {isSelectedRiv && <Transformer ref={transformerRefRiv} />}
              <Image
                image={ambulance}
                x={730}
                y={500}
                draggable
                width={25}
                height={70}
                ref={imageRefAmb}
                onClick={() => {
                  setIsSelectedAmb(!isSelectedAmb);
                }}
              />
              {isSelectedAmb && <Transformer ref={transformerRefAmb} />}
            </Layer>
          </Stage>
          <Link
            href="/"
            className="font-semibold lg:text-sm text-xs text-center lg:py-4 lg:px-12 px-4 py-2 hover:scale-105 hover:bg-white hover:border overflow-hidden duration-300 hover:border-orange-600 hover:text-orange-600 rounded-full bg-orange-600 text-white z-50 relative right-0 bottom-10"
          >
            Beranda
          </Link>
        </div>

        <div className=" w-full h-full pt-40 fixed bg-green-700">
          <div className=" px-20">
            <div className=" flex relative z-0">
              <div className=" flex w-[70px] bg-stone-600 h-[30px] absolute right-0"></div>
              <div className=" flex w-[110px] bg-stone-600 h-[30px] rotate-[-30deg] absolute right-[55px] top-[25.5px]"></div>
            </div>

            <div className=" flex w-full h-[130px] bg-stone-800 z-10 relative mt-7 items-center justify-between border-white border-solid border-[3px]">
              <div className=" p-4">
                <div className=" flex flex-col gap-2">
                  <div className=" flex bg-white w-20 h-3"></div>
                  <div className=" flex bg-white w-20 h-3"></div>
                  <div className=" flex bg-white w-20 h-3"></div>
                </div>
                <div className=" flex flex-col gap-2 mt-3">
                  <div className=" flex bg-white w-20 h-3"></div>
                  <div className=" flex bg-white w-20 h-3"></div>
                  <div className=" flex bg-white w-20 h-3"></div>
                </div>
              </div>
              <div className=" flex w-full gap-[-10px] items-center justify-between">
                <div className=" text-white rotate-90">
                  <h1 className=" text-3xl">09</h1>
                </div>
                <div className=" bg-white w-16 h-2"></div>
                <div className=" flex flex-col">
                  <div className=" bg-white w-16 h-10"></div>
                  <div className=" bg-white w-16 h-2 my-3"></div>
                  <div className=" bg-white w-16 h-10"></div>
                </div>
                <div className=" bg-white w-16 h-2"></div>
                <div className=" bg-white w-16 h-2"></div>
                <div className=" bg-white w-16 h-2"></div>
                <div className=" bg-white w-16 h-2"></div>
                <div className=" bg-white w-16 h-2"></div>
                <div className=" flex flex-col">
                  <div className=" bg-white w-16 h-10"></div>
                  <div className=" bg-white w-16 h-2 my-3"></div>
                  <div className=" bg-white w-16 h-10"></div>
                </div>
                <div className=" bg-white w-16 h-2"></div>
                <div className=" text-white -rotate-90">
                  <h1 className=" text-3xl">27</h1>
                </div>
              </div>

              <div className=" p-4">
                <div className=" flex flex-col gap-2">
                  <div className=" flex bg-white w-20 h-3"></div>
                  <div className=" flex bg-white w-20 h-3"></div>
                  <div className=" flex bg-white w-20 h-3"></div>
                </div>
                <div className=" flex flex-col gap-2 mt-3">
                  <div className=" flex bg-white w-20 h-3"></div>
                  <div className=" flex bg-white w-20 h-3"></div>
                  <div className=" flex bg-white w-20 h-3"></div>
                </div>
              </div>
            </div>

            <div className=" flex relative z-0">
              <div className=" flex w-[70px] bg-stone-600 h-[30px] absolute left-0"></div>
              <div className=" flex w-[110px] bg-stone-600 h-[30px] rotate-[-30deg] absolute left-[55px] top-[-25.5px]"></div>
            </div>
          </div>
          <div className=" relative -left-20">
            <div className=" absolute left-[430px]">
              <div className=" bg-stone-800 w-14 h-40"></div>
              <div className=" bg-stone-800 w-80 h-52 absolute -left-[130px]"></div>
            </div>
            <div className=" bg-stone-800 w-56 h-5 absolute mt-14 ml-[470px]"></div>
            <div className=" absolute left-[680px]">
              <div className=" bg-stone-800 w-14 h-60"></div>
              <div className=" bg-stone-800 w-52 h-28 absolute top-40"></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
