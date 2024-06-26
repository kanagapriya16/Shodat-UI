import React from "react";
import { MdArrowOutward, MdOutlineCallMade } from "react-icons/md";
import image from "../../Assets/Components/Footer/arrow-down-left.png";
const Footer1 = () => {
  return (
    <footer className="bg-black text-white pt-10 ">
      <div className="md:mx-12 mx-2 w-full max-w-screen-xl  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          {/* 1st column */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            <div className="mb-4 text-center lg:text-left">
              <div className="font-sans text-xl font-semibold mb-2   md:mr-5 md:ml-0 ">
                How can AI help scale your business?
              </div>
              <div className="font-sans text-xl font-semibold mb-4  md:mr-5 md:ml-0 ">
                Let's talk and discover the answers together.
              </div>
            </div>
          </div>
          {/* 2nd column */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
            <div className="mb-4">
              <div className="font-sans text-xl font-semibold mb-4 text-center lg:text-left  lg:mr-5 lg:ml-52 ">
                Our Newsletter
              </div>
              <div className="relative mx-5 lg:mr-5 lg:ml-52 w-3/4 md:w-[90%]">
                <input
                  type="text"
                  placeholder="Business email address"
                  className="bg-white text-black border border-gray-400 rounded-3xl py-2 px-4 pr-10 focus:outline-none focus:border-black w-full"
                />
                <div className="absolute inset-y-0 right-1 flex items-center pl-3 pointer-events-none">
                  {/* <img
                    src={image}
                    style={{
                      color: "#ffffff",
                      background: "#000000",
                      width: "36px",
                      height: "38px",
                      borderRadius: "18px",
                    }}
                  /> */}
                  <div
                    style={{
                      background: "#000000",
                      width: "36px",
                      height: "38px",
                      borderRadius: "18px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MdArrowOutward
                      style={{
                        color: "#ffffff",
                        position: "absolute",
                        width: "16px",
                        height: "20px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
