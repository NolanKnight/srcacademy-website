import React from "react";

function Footer() {
  return (
    <>
      <div className="h-[40vh] w-full bg-slate-700 grid grid-cols-2 content-center p-10">
        <div className="text-xl text-white">
          <p>
            This website was created by{" "}
            <a
              href="https://github.com/NolanKnight"
              target="_blank"
              className="underline"
            >
              Nolan Knight
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
