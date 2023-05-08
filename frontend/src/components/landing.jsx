import React from "react";

export default function Landing() {
  return (
    <section className="relative  bg-blueGray-50 ">
      <div className="relative  pb-32 flex content-center items-center justify-center min-h-[80vh] pt-32 ">
        <div
          className="absolute top-0 w-full h-screen bg-center bg-cover bg-fixed"
          style={{
            backgroundImage: "url(/images/bg3.png)",
            fontFamily: "Righteous",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-60 bg-blue-600"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div
                className="pr-12"
                style={{
                  fontFamily: "Righteous",
                }}
              >
                <h1 className="text-white font-semibold text-5xl">
                  Welcom to our clinic managment system.
                </h1>
                <p className="mt-4 text-lg text-white">
                  Take care of your body and your body will take care of you. In
                  addition to that we will provide you a standard check in your
                  health.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4  ">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center hover:scale-105 duration-700">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <img src="/icons/patient.svg" alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Petient care</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center hover:scale-105 duration-700">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <img src="/icons/doctor.svg" alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Easy Appointment</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center hover:scale-105 duration-700">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <img src="/icons/admin.svg" alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Medical support</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
