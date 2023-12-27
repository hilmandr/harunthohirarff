"use client";

import { IPost } from "@/type";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { LuCalendarDays, LuClock } from "react-icons/lu";

interface PostItemProps {
  post: IPost;
}

export default function PostItem({ post }: PostItemProps) {
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  return (
    <div className=" py-10">
      <div className=" w-full rounded-2xl h-80 group overflow-hidden">
        <Link
          href={`/artikel/${post.slug}`}
          className=" aspect-[16/10] relative w-full"
        >
          <div className=" flex flex-col justify-between w-full h-full bg-black bg-opacity-70 p-7 text-white z-0 rounded-2xl transition-all duration-300 group-hover:bg-opacity-0">
            <div className=" flex">
              <h1 className=" text-3xl font-semibold">{post.title}</h1>
            </div>
            <div className=" flex flex-col gap-y-2">
              <div className=" flex items-center gap-2 text-xs">
                <LuCalendarDays />
                <p>{format(new Date(post.date), "dd MMM, yyyy")}</p>
              </div>
              <p className=" text-xs">{post.summary}</p>
            </div>
          </div>
          <Image
            src={post?.thumbnail as string}
            fill
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className=" object-cover object-center -z-10 rounded-2xl group-hover:scale-110 overflow-hidden transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
