import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPosts } from "../services/operations/postApi";
import { Link } from "react-router-dom";

const About = () => {
  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      if (res) {
        return res;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const { data, isPending, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostData,
    // gcTime : 3000,
    // staleTime : 2000,
    // refetchInterval : 1000, api will call after 1 sec
    // refetchIntervalInBackground : 2000
  });

  if (isPending) {
    return <p>Loading....</p>;
  }

  console.log(data);

  return (
    <div>
      {data.slice(0, 5).map((post) => (
        <Link key={post?.id} to={`/about/${post?.id}`} > 
        <div  className="bg-red-300 mt-5 ">
        
            <p >{post.id}</p>
            <p>{post?.title}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default About;
