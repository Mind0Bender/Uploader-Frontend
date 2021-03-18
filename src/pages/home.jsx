import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  let [videos, setVideos] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8080/all").then((res) => {
      setVideos(res.data);
    });
  }, []);

  if (!videos)
    return (
      <div className="text-center pt-60 h-screen w-screen text-3xl">
        Loading...
      </div>
    );
  return (
    <div>
      {videos.map((myvideo) => {
        return (
          <div
            key={myvideo.id}
            className="p-6 my-5 mx-2 rounded-md flex bg-gray-200 items-center flex-wrap"
          >
            <Link to={`/detail/${myvideo.id}`}>
              <img
                style={{
                  maxWidth: "60rem",
                  width: "100%",
                }}
                loading="lazy"
                src={myvideo.img}
                className="rounded-md hover:shadow-lg w-xs"
              />
            </Link>
            <h1 className="text-2xl ml-5 mr-5 mt-5">{myvideo.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
