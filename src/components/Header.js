import jsLogo from "../assets/images/js-logo.png";
import polygonMeshImg from "../assets/images/icons8-mesh-100.png";

export const Header = () => {
  return (
    <div className="flex flex-col justify-center text-center gap-3 w-full">
      <nav className="navbarHeader flex flex-col sm:flex-row justify-evenly items-center border-b-2 border-solid border-slate-200">
        <div className="logo flex flex-row justify-center items-center gap-6">
          <img
            src={polygonMeshImg}
            alt="polygon Mesh Icon"
            className="w-12 animate-slowspin"
          />
          <a href="/">
            <h1 className="text-5xl sm:text-3xl font-bold hover:border-b-4 hover:duration-500 hover:border-blue-700">
              YK Apps
            </h1>
          </a>
        </div>
        <div className="flex flex-col mb-4 text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          <h1>FIND YOUR</h1>
          <img src={jsLogo} alt="Logo JS" className="w-32" />
          <h1>CHALLENGE</h1>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Local Storage
        </button>
      </nav>
      <ul className="title my-6 text-center text-xl font-bold flex flex-col gap-6 leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl  dark:text-white">
        {/* <li className="flex flex-row justify-center items-center gap-6">
          <h2 className="">Practice your JS skills now</h2>
        </li> */}
        <li>
          <h3>
            Pick up a new challenge for your{" "}
            <mark className="px-2 py-1 mx-1 text-white bg-blue-600 rounded dark:bg-blue-500">
              portfolio
            </mark>{" "}
            and achieve more!{" "}
          </h3>
        </li>
      </ul>
    </div>
  );
};
