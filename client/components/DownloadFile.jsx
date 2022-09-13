import React from "react";
import Image from "next/image";
import FormData from "form-data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DownloadFile() {
  const urlDownload = "http://localhost:9000/api/download";
  const queryData = new FormData();

  const handleDownload = async (e) => {
    e.preventDefault();

    queryData.append("file", document.getElementById("file").value);
    queryData.append("password", document.getElementById("password").value);

    try {
      await fetch(
        urlDownload,
        {
          method: "POST",
          body: queryData,
        }
      ).then((response) => {
        if (response.status === 200) {
          console.log(response);
        } else {
          // toast.error('Something went wrong, please try again.',  {
          //   position: toast.POSITION.TOP_CENTER
          // });
          console.log(response);
        }
      });
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div id="download" className="bg-gray-300">
      <div className="flex justify-center">
        <h1 className="mt-4 md:mt-10 text-3xl sm:text-5xl md:text-6xl font-bold text-blue-600 drop-shadow-xl">
          Download Image
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row justify-center items-center my-20 md:w-1/2">
          <div className="h-96 w-64 drop-shadow-2xl bg-gray-600 rounded-2xl">
            <Image
              src="/download.jpg"
              alt="Upload Image"
              height="384px"
              width="256px"
              layout="intrinsic"
            />
          </div>
          <p className="mt-8 md:ml-6 text-2xl text-black">
            Download files <br /> whenever you want
          </p>
        </div>

        <div className="flex flex-1 items-center md:w-1/2 my-20 p-5">
          <form onSubmit={handleDownload} className="flex flex-1 flex-col">
            <input
              className="mb-5 h-10 rounded-md w-full md:w-1/2 text-xl placeholder:text-xl pl-3"
              type="text"
              name="file"
              id="file"
              placeholder="Enter the name of you file"
              required
            />
            <input
              className="mb-5 h-10 rounded-md w-full md:w-1/2 text-xl placeholder:text-xl pl-3"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <button
              className="px-5 py-2 md:w-1/2 font-bold bg-blue-700 rounded-lg text-white hover:bg-blue-900"
              type="submit"
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DownloadFile;
