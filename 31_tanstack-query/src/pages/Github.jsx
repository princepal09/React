import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  console.log(data);



  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <img
        src={data?.avatar_url}
        alt={data?.login}
        width="150"
        style={{ borderRadius: "50%" }}
      />

      <h1>{data?.name || data?.login}</h1>

      <p>{data?.bio}</p>

      <p>
        <strong>Followers:</strong> {data?.followers}
      </p>

      <p>
        <strong>Following:</strong> {data?.following}
      </p>

      <p>
        <strong>Public Repos:</strong> {data?.public_repos}
      </p>

      <Link to={data?.html_url}>View GitHub Profile</Link>
    </div>
  );
};

export default Github;
