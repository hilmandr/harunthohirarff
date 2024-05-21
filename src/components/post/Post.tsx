"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface PostProps {
  content: MDXRemoteSerializeResult;
}

export default function Post({ content }: PostProps) {
  return (
    <div className=" prose prose-stone max-w-full mt-8 prose-sm">
      <MDXRemote {...content} />
    </div>
  );
}
