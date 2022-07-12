import React from "react";

function UploadFile() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-900">
      <div className="flex justify-center mt-4 md:mt-10">
        <h1>Bhej-de</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center items-center my-20 md:w-1/2">
          <div className="h-96 w-64 drop-shadow-2xl bg-gray-600 rounded-2xl p-5">
            Image
          </div>
        </div>

        <div className="flex flex-1 items-center md:w-1/2 my-20 pl-10">
          <form action="/" className="flex flex-1 flex-col">
            <input
              className="w-full mb-5"
              type="file"
              name="file"
              id="file"
              required
            />
            <input
              className="mb-5 h-10 rounded-md w-full md:w-1/2 text-xl placeholder:text-xl"
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
