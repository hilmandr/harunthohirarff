/* eslint-disable jsx-a11y/alt-text */
"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { IoWaterOutline } from "react-icons/io5";
import { TbFlipVertical } from "react-icons/tb";
import { Image as IImageRef } from "konva/lib/shapes/Image";
import { Transformer as ITransformerRef } from "konva/lib/shapes/Transformer";
import { FaFire } from "react-icons/fa";
import Runway from "@/components/runway";
import { FaHome } from "react-icons/fa";

const TableTopKonvas = dynamic(() => import("@/components/table-top-konva"), {
  ssr: false,
});
// import TableTopKonva from "@/components/table-top-konva";

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
          <TableTopKonvas />
          <Link href="/" className="">
            <FaHome
              fill="white"
              size={45}
              className=" bg-orange-600 py-3 px-3 rounded-full relative bottom-14 left-4 duration-300 hover:bg-orange-400"
            />
          </Link>
        </div>
        <Runway />
      </body>
    </>
  );
}
