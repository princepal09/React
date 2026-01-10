import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  //consume data from contextAPI

  const { posts, loading } = useContext(AppContext);
  console.log("Printing inside blogs components");
  console.log(posts);
  return (
    <div className="w-11/12 mt-24  max-w-125">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No post Found</p>
        </div>
      ) : (
        posts.map((posts) => (
          <div className="mb-3" key={posts.id}>
            <p className="font-bold text-2xl mb-1 leading-7 ">{posts.title}</p>
            <p className="text-[12px]">
              By <span className="italic "> {posts.author}</span> on <span className="font-bold underline"s>{posts.category}</span>
            </p>

            <p className="text-[12px]">Posted on {posts.date}</p>

            <p className="text-[16px] leading-6 tracking-tighter mb-2  mt-2.5 ">{posts.content}</p>

            <div className="flex gap-3">
              {posts.tags.map((tag, idx) => {
                return <span className="text-blue-500 underline font-bold text-[10px]" key={idx}>{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
