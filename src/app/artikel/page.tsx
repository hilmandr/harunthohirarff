import PostItem from "@/components/post/PostItem";
import getPosts from "@/services/post/getPosts";
import Header from "@/components/header";

export default function Page() {
  const posts = getPosts();
  return (
    <>
      <Header />
      <div className=" flex flex-col items-center container mx-auto px-10 w-full justify-center">
        <div className=" flex w-[1000px] h-28 bg-white items-center justify-center px-7 mt-14 rounded-3xl shadow-lg shadow-gray-200">
          <h1 className=" text-5xl font-bold">ARTIKEL</h1>
        </div>
        <div className=" w-[1000px] flex-col grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 z-50">
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
