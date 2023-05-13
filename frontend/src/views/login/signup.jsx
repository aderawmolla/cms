import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <div
      className="w-full p-8 bg-white md:flex md:items-center md:justify-center sm:w-auto md:h-full xl:w-2/5 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none"
      style={{ fontFamily: "Poltawski Nowy" }}
    >
      <div className="w-full max-w-md space-y-4">
        <div className="pt-8 text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            Welcom Back!
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Please Register to access our services.
          </p>
        </div>

        <form className="pb-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="relative">
            <label className=" text-sm font-bold tracking-wide text-gray-700">
              first name
            </label>
            <input
              className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter your medical card number"
              // value={""}
              onChange={(e) => e.target.value}
            />
          </div>
          <div className="relative">
            <label className=" text-sm font-bold tracking-wide text-gray-700">
              last name
            </label>
            <input
              className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter your medical card number"
              // value={""}
              onChange={(e) => e.target.value}
            />
          </div>
          <div className="flex justify-between pr-8">
            <div className="w-1/2  mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Gender
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-white border-2 border-gray-300  text-gray-700 py-[10.5px] px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                  id="grid-state"
                >
                  <option>male</option>
                  <option>Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Age
              </label>
              <input
                className="px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                id="grid-zip"
                type="number"
                placeholder="Fill age"
              />
            </div>
          </div>

          <div className="relative">
            <label className=" text-sm font-bold tracking-wide text-gray-700">
              username
            </label>
            <input
              className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter your medical card number"
              // value={""}
              onChange={(e) => e.target.value}
            />
          </div>
          <div className="content-center mt-8">
            <label className=" text-sm font-bold tracking-wide text-gray-700">
              Password
            </label>
            <input
              className="content-center w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="Enter your password"
              // value={""}
              onChange={(e) => e.target.value}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-4 h-4 bg-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <label
                for="remember_me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="/" className="text-indigo-400 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Link
              to="/signIn/payment"
              className="flex justify-center w-full p-4 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600"
            >
              Register
            </Link>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-gray-500 text-md">
            <span>Already have an account?</span>
            <Link
              to="/signIn"
              className="text-indigo-400 no-underline transition duration-300 ease-in cursor-pointer hover:text-blue-500 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
