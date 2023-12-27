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
import Runway from "@/components/runway";
import { FaHome } from "react-icons/fa";

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
                y={405}
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
                y={470}
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
                y={470}
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
