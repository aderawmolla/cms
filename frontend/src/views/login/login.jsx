import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../model/data.json";

export default function Login() {
  const [info, setInfo] = useState();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div
          className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover  relative"
          style={{
            backgroundImage: "url(/images/bg1.jpg)",
          }}
        >
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-40 inset-0 z-0"></div>
          <div
            className="w-full  max-w-md z-10"
            style={{ fontFamily: "Righteous" }}
          >
            <div className="sm:text-4xl xl:text-5xl  font-bold leading-tight tracking-wide mb-6">
              Welcome to our Clini Management System.
            </div>
            <div
              className="sm:text-sm xl:text-xl text-white font-mono  font-normal"
              //   style={{ fontFamily: "Josefin Sans" }}
            >
              A full ranged clinic management system for Patients, Doctors, and
              Managers.
            </div>
          </div>
        </div>
        <div
          className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white"
          style={{ fontFamily: "Poltawski Nowy" }}
        >
          <div className="max-w-md w-full space-y-4">
            <div className="text-center py-8">
              <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900">
                Welcom Back!
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                Please sign in to your account
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-16 bg-gray-200"></span>
              <span className="text-gray-700 font-normal">log as</span>
              <span className="h-px w-16 bg-gray-200"></span>
            </div>
            <div className="flex flex-row justify-center items-center space-x-6 font-mono text-gray-600">
              <button
                className="flex flex-col justify-start w-16"
                onClick={() => {
                  handleButtonClick("who");
                  setInfo(
                    <Form
                      image="bagegs.png"
                      description="We are travelers and technologists. We work across time zones, hemispheres, cultures and languages. We’re used to breaking things down and building them back up again, until they’re even better."
                    />
                  );
                }}
              >
                <p className="text-center">Patient</p>

                <img
                  alt=""
                  className="w-16 h-16 p-2 hover:bg-blue-200 rounded-xl hover:shadow-lg hover:shadow-black duration-500"
                  src="/icons/patient.svg"
                />
              </button>
              <button
                className="flex flex-col justify-start w-16"
                onClick={() => {
                  handleButtonClick("who");
                  setInfo(
                    <Form
                      image="bagegs.png"
                      description="We are travelers and technologists. We work across time zones, hemispheres, cultures and languages. We’re used to breaking things down and building them back up again, until they’re even better."
                    />
                  );
                }}
              >
                <p className="text-center">Doctor</p>

                <img
                  alt=""
                  className="w-16 h-16 p-2 hover:bg-blue-200 rounded-xl hover:shadow-lg hover:shadow-black duration-500"
                  src="/icons/doctor.svg"
                />
              </button>
              <button
                className="flex flex-col justify-start w-16"
                onClick={() => {
                  handleButtonClick("who");
                  setInfo(
                    <Form
                      image="bagegs.png"
                      description="We are travelers and technologists. We work across time zones, hemispheres, cultures and languages. We’re used to breaking things down and building them back up again, until they’re even better."
                    />
                  );
                }}
              >
                <p className="text-center">Manager</p>

                <img
                  alt=""
                  className="w-16 h-16 p-2 hover:bg-blue-200 rounded-xl hover:shadow-lg hover:shadow-black duration-500"
                  src="/icons/admin.svg"
                />
              </button>
            </div>

            <form className="mt-8 space-y-6 py-8" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="relative">
                <div className="absolute right-3 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  card number
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="text"
                  placeholder="Ente your medical card number"
                  value={""}
                  onChange={(e) => e.target.value}
                />
              </div>
              <div className="mt-8 content-center">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder="Enter your password"
                  value={""}
                  onChange={(e) => e.target.value}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    for="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-indigo-400 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <Link
                  to="/doctor"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </Link>
              </div>
              {/* <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Click here to regsiter.</span>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Ask for card number
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Form({ user }) {
  return (
    <form className="mt-8 space-y-6 py-8" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      {data.user.map((item, index) => (
        <div className="relative">
          <div className="absolute right-3 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
            card number
          </label>
          <input
            className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
            type="text"
            placeholder="Ente your medical card number"
            value={""}
            onChange={(e) => e.target.value}
          />
        </div>
      ))}

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
          />
          <label for="remember_me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="text-indigo-400 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Sign in
        </button>
      </div>
      {/* <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Click here to regsiter.</span>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Ask for card number
                </a>
              </p> */}
    </form>
  );
}
