import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";

const Upload = () => {
  let [percentage, setPercentage] = useState(0);

  let [upload, setUpload] = useState({
    title: "",
    desctiption: "",
    file: null,
  });

  let uploadVideo = async () => {
    let data = new FormData();
    data.append("title", upload.title);
    data.append("description", upload.desctiption);
    data.append("file", upload.file);
    let res = await axios.post("http://localhost:8080/api/upload", data, {
      onUploadProgress: (e) => {
        setPercentage(parseInt((e.loaded / e.total) * 100));
      },
    });

    if (res.data.res === true) {
      window.alert("uploaded successfully");
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/bgs/camera.jpg")',
      }}
      className="flex justify-center items-center h-screen bg-no-repeat bg-cover"
    >
      <div
        style={{
          background: "rgba( 0, 0, 0, 0.5 )",
          backdropFilter: "blur( 4.0px )",
          WebkitBackdropFilter: "blur( 4.0px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        className="flex flex-col justify-around p-5 border-gray-600 h-1/2 w-2/3 rounded-3xl shadow-md max-w-lg"
      >
        <input
          className="rounded-md p-3 focus:outline-black shadow-md"
          type="text"
          name="title"
          placeholder="File Name"
          onChange={(e) => setUpload({ ...upload, title: e.target.value })}
        />
        <input
          className="rounded-md p-3 focus:outline-black shadow-md"
          type="text"
          name="desc"
          placeholder="Descryption"
          accept={"video/*"}
          onChange={(e) =>
            setUpload({ ...upload, desctiption: e.target.value })
          }
        />
        <input
          onChange={(e) => {
            setUpload({
              ...upload,
              file: e.target.files[0],
            });
          }}
          className="rounded-full p-3 focus:outline-black text-white"
          type="file"
        ></input>
        <div className="bg-white rounded-md flex">
          <div
            style={{
              width: percentage + "%",
            }}
            className="py-3 rounded-md bg-green-500 shadow-2xl"
          >
            <div className={`animate-bounce text-center font-bold`}>
              {parseInt(percentage) + "%"}
            </div>
          </div>
        </div>
        <button
          className="rounded-md p-3 focus:outline-none bg-white hover:bg-gray-300 shadow-md font-bold"
          onClick={() => {
            uploadVideo();
            console.log(upload);
          }}
        >
          Submit
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Upload;
