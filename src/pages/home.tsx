import React from "react";

function Home() {
  return (
    <>
      <div className="w-full h-[50vh] bg-slate-700 grid place-items-center">
        <h1 className="text-white text-9xl">HOME</h1>
      </div>
      <h2 className="mt-32 text-7xl text-center">
        Welcome to Solid Rock Christian Academy!
      </h2>
      <div className="w-full h-fit flex justify-center">
        <div className="w-96 h-56 m-6 grid place-items-center drop-shadow-lg rounded-lg mt-8 border-solid border-2 bg-teal-700">
          <input
            placeholder="Enter your email"
            className="w-56 h-14 text-lg bg-white rounded-lg p-4"
          />
          <button className="w-56 h-14 text-lg bg-white rounded-lg">
            Sign up for our newsletter!
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
