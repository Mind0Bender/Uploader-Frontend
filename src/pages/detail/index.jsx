import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  let [data, setData] = useState(null);
  let { id } = useParams();
  let [descIsOpen, setDescIsOpen] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8080/single/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  if (!data) return <div>Loading...</div>;
  return (
    <div className="p-10">
      <video
        poster={data.img}
        style={{
          zIndex: 1,
          height: "50%",
        }}
        className="rounded-lg w-3/4 h-1/2"
        autoPlay
        controls
        src={data.url}
        loop
      ></video>
      <br />
      <hr />
      <h1 className="text-3xl p-3">{data.name}</h1>
      <hr />
      <p className="p-2">{data.desc}</p>
    </div>
  );
};

export default Detail;
