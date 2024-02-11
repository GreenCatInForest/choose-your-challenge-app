import jsLogo from "../assets/images/js-logo.png";

export const Header = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <div className="flex justify-center text-center items-center">
        <a href="/">
          <h1 className="text-5xl sm:text-3xl font-bold mr-12 hover:transform hover:scale-150">
            YK
          </h1>
        </a>
        <div className="title flex flex-row items-center">
          <h2>Find Your</h2>
          <img src={jsLogo} alt="Logo JS" className="w-14" />
          <h1>Challenge</h1>
        </div>
      </div>
      <h2>1. Practice your JS skills now</h2>
      <h3>2. Pick up a new challenge for your portfolio and achieve more </h3>
    </div>
  );
};
