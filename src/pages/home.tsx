import React from "react";

function Home() {
  return (
    <div className="w-full h-fit grid place-items-center mt-8 mb-8">
      <div className="w-[80vw] h-fit grid grid-cols-2 content-center">
        <div className=" w-80 h-52 grid place-items-center drop-shadow-lg rounded-lg mt-8 border-solid border-2 bg-teal-700">
          <p className="text-white">Sign up for our newsletter!</p>
          <input
            placeholder="Enter your email"
            className="w-56 h-14 text-base bg-white rounded-lg p-4"
          />
          <button className="w-56 h-14 text-base bg-white rounded-lg">
            Sign up
          </button>
        </div>
        <p>Welcome to SRCA! Our school is an awesome school. Come join!</p>
      </div>
      <div className="divider"></div>
      <div className="w-[80vw] h-fit grid grid-cols-2 content-center">
        <h1 className="text-5xl">Our Mission</h1>
        <p>Blah Blah Blah Blah Blah Blah Blah Blah</p>
      </div>
      <div className="divider"></div>
      <div className="w-[80vw] h-fit grid grid-cols-2 content-center">
        <div className="w-96 h-96 bg-black"></div>
        <h1 className="text-5xl">Location</h1>
      </div>
    </div>
  );
}

export default Home;
