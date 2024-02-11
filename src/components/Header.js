import jsLogo from "../assets/images/js-logo.png";

export const Header = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <div className="flex flex-col sm:flex-row justify-center text-center items-center">
        <a href="/">
          <h1 className="text-5xl sm:text-3xl font-bold md:mr-12 hover:transform hover:scale-150">
            YK
          </h1>
        </a>
        <div className="title flex flex-col sm:flex-row items-center">
          <h2>Find Your</h2>
          <img src={jsLogo} alt="Logo JS" className="w-14" />
          <h1>Challenge</h1>
        </div>
      </div>
      <h2>Practice your JS skills now</h2>
      <ul className="flex flex-col sm:flex-row items-center gap-3">
        <li>Basic Challenges</li>
        <li>Algorithm Challenges</li>
      </ul>
      <h3>Pick up a new challenge for your portfolio and achieve more! </h3>
    </div>
  );
};
