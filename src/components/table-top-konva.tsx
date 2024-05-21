"use client";
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import { Transformer as ITransformerRef } from "konva/lib/shapes/Transformer";
import { Image as IImageRef } from "konva/lib/shapes/Image";

const TableTopKonva = () => {
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
    <div>
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
    </div>
  );
};

export default TableTopKonva;
