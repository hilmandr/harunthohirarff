import Post from "@/components/post/Post";
import getPostBySlug from "@/services/post/getPostBySlug";
import Header from "@/components/header";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { format } from "date-fns";
import Image from "next/image";

interface PageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  return {
    title: post?.title,
  };
}

export default async function Page({ params }: PageParams) {
  const post = getPostBySlug(params.slug);

  const content = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        // @ts-ignore
        rehypeHighlight,
      ],
    },
  });

  return (
    <>
      <Header />
      <div className=" flex flex-col container mx-auto w-[1000px]">
        <div className=" mt-10 text-stone-900">
          <h1 className="text-[24px] font-medium leading-snug tracking-tight lg:text-[36px]">
            {post.title}
          </h1>
          <div className=" mt-1 flex items-center gap-2">
            <p className=" text-sm">
              {format(
                post?.date ? new Date(post?.date) : new Date(),
                "dd MMM, yyyy"
              )}
            </p>
          </div>
          <div className=" flex relative w-full rounded-2xl h-[480px] group mt-10 z-10">
            <Image
              src={post?.thumbnail as string}
              fill
              alt=""
              className=" object-cover object-center -z-10 rounded-2xl"
            ></Image>
          </div>
          <Post content={content} />
        </div>
      </div>
    </>
  );
}
