import jsLogo from "../assets/images/js-logo.png";

export const Header = () => {
  return (
    <div className="flex flex-col justify-center text-center gap-3 w-full">
      <nav className="navbarHeader flex flex-col sm:flex-row justify-evenly items-center">
        <div className="title">
          <a href="/">
            <h1 className="text-5xl sm:text-3xl font-bold hover:transform hover:scale-150">
              YK
            </h1>
          </a>
        </div>
        <div className="subTitle flex sm:flex-row items-center">
          <h1>Find Your</h1>
          <img src={jsLogo} alt="Logo JS" className="w-14" />
          <h1>Challenge</h1>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Local Storage
        </button>
      </nav>
      <h2>Practice your JS skills now</h2>
      <h3>Pick up a new challenge for your portfolio and achieve more! </h3>
    </div>
  );
};
