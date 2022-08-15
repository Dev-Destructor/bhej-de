import React from "react";
import Image from 'next/image';

function UploadFile() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-900">
      <div className="flex justify-center">
        <h1 className="mt-4 md:mt-10 text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md">Upload File</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row justify-center items-center my-20 md:w-1/2">
          <div className="h-96 w-64 drop-shadow-2xl bg-gray-600 rounded-2xl ml-5 p-5">
            Image 
          </div>
          <p className="mt-8 md:ml-6 text-2xl text-white">Share your files <br /> and care for others</p>
        </div>

        <div className="flex flex-1 items-center md:w-1/2 my-20 p-5">
          <form action="http://localhost:9000/api/upload" method="post" className="flex flex-1 flex-col">
            <input
              className="w-full mb-5"
              type="file"
              name="file"
              id="file"
              required
            />
            <input
              className="mb-5 h-10 rounded-md w-full md:w-1/2 text-xl placeholder:text-xl placeholder:pl-3"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
            <input
              className="mb-5 h-10 rounded-md w-full md:w-1/2 text-xl placeholder:text-xl placeholder:pl-3"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
            />
            <button
              className="px-5 py-2 md:w-1/2 font-bold bg-blue-700 rounded-lg text-white hover:bg-blue-900"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;