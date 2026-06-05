import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPostData } from "../services/operations/postApi";
import { useParams } from "react-router-dom";

const PostData = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostData(id),
    gcTime : 1000 * 5,
    staleTime : 5 * 2000
  });

  console.log(data);

  return (
    <div className="flex flex-col">
      <p> {data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
};

export default PostData;
