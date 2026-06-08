import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { apiConnector } from "../services/apiConnector";

const Services = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const url = "https://jsonplaceholder.typicode.com";
  const pageLimit = 3;

  const getPosts = async ({ queryKey }) => {
    const [, page] = queryKey;

    const res = await apiConnector(
      "GET",
      `${url}/posts?_page=${page}&_limit=${pageLimit}`
    );

    return res.data;
  };

  const {
    data,
    isPending,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: getPosts,
    placeholderData: keepPreviousData,
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {isFetching && (
        <div className="mb-4 text-blue-600 font-medium">
          Loading next page...
        </div>
      )}

      {data?.map((post) => (
        <div
          key={post.id}
          className="border rounded-lg p-4 mb-4 bg-gray-50 shadow-sm"
        >
          <p className="font-bold text-sm text-gray-500">
            Post #{post.id}
          </p>

          <h2 className="text-lg font-semibold mt-1">
            {post.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {post.body}
          </p>
        </div>
      ))}

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((prev) => prev - 1)}
          className={`px-5 py-2 rounded-lg text-white font-medium transition-all
            ${
              pageNumber === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-900 hover:bg-gray-700"
            }`}
        >
          ← Prev
        </button>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 font-semibold shadow">
          {pageNumber}
        </div>

        <button
          disabled={isFetching}
          onClick={() => setPageNumber((prev) => prev + 1)}
          className={`px-5 py-2 rounded-lg text-white font-medium transition-all
            ${
              isFetching
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Services;