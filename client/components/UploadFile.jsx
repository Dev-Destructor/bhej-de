import React, { useState } from "react";
import axios from 'axios';

function UploadFile() {
  const urlUpload = "http://localhost:9000/api/upload";
  const [file, setFile ] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");

  const data = {
    file: file,
    email: email,
    password: password
  }
  
  const config = {
    headers: {
        "Content-Type": "application/json, multipart/form-data"
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post(urlUpload, data, config);
      window.alert("File uploaded successfully, check your email");
    } catch (error) {
      console.log(error);
    }
  };
  
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
          <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col"
          encType="multipart/form-data">
            <input
              className="w-full mb-5"
              value={file}
              onChange={(e) => setFile(e.target.value)}
              type="file"
              name="file"
              id="file"
              required
            />
            <input
              className="mb-5 h-10 rounded-md w-full md:w-1/2 text-xl placeholder:text-xl pl-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
            <input
              className="mb-5 h-10 rounded-md w-full md:w-1/2 text-xl placeholder:text-xl pl-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
