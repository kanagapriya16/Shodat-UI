import React from "react";
import watch from "../../../../Assets/Components/HomePage/02_EmbracingPower/eOps-Watch.png";
import prosense from "../../../../Assets/Components/HomePage/02_EmbracingPower/eOps-prosense.png";
import trace from "../../../../Assets/Components/HomePage/02_EmbracingPower/eOps-Trace.png";
import insights from "../../../../Assets/Components/HomePage/02_EmbracingPower/eOps-Insights.png";

function EmbracingImages() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols- lg:grid-cols-3 gap-50 lg:w-full  mx-auto lg:mt-20 lg:h-[500px] lg:ml-10">
      <div className="mt-7 lg:mt-10 ">
        <div className="grid grid-cols-1 gap-4">
          <div className="lg:ml-7 ">
            <div className="bg-white shadow-2xl flex flex-col justify-between rounded-xl min-h-120 lg:w-[200px] md:w-190 sm:w-190 xs:w-150">
              <img
                src={watch}
                alt="eOps Watch"
                className="w-full h-40 object-cover rounded-xl"
              />
              <p className="text-center font-semibold text-base mt-1">
                eOps Watch
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-2xl flex flex-col justify-between rounded-xl min-h-150 lg:w-60 md:w-250 sm:w-190 xs:w-150">
              <img
                src={prosense}
                alt="eOps Presense"
                className="w-full h-52  object-cover rounded-xl"
              />
              <p className="text-center font-semibold text-base mt-1">
                eOps Prosense
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:ml-16 ">
        <div className="grid grid-cols-1 gap-4">
          <div className="">
            <div className="bg-white shadow-2xl flex flex-col justify-between rounded-xl min-h-120 lg:w-[200px] md:w-190 sm:w-190 xs:w-150">
              <img
                src={trace}
                alt="eOps Trace"
                className="w-full h-40 object-cover rounded-xl"
              />
              <p className="text-center font-semibold text-base mt-1">
                eOps Trace
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-2xl flex flex-col justify-between rounded-xl min-h-150 lg:w-60 md:w-250 sm:w-190 xs:w-150">
              <img
                src={insights}
                alt="eOps Insights"
                className="w-full h-52 object-cover rounded-xl"
              />
              <p className="text-center font-semibold text-base mt-1">
                eOps Insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmbracingImages;