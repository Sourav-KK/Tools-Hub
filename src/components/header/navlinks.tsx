import { NavigateFunction, useNavigate } from "react-router-dom";
import toolhub from "../../assets/toolhub.png";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";

const Navlinks = () => {
  const navigate: NavigateFunction = useNavigate();

  const goHome: () => void = () => {
    navigate("/");
  };

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(progress + 100);
  }, []);

  return (
    <>
      <header className="grid grid-cols-2 justify-items-center align-middle">
        <LoadingBar
          color="#f11946"
          height={2}
          progress={progress}
          loaderSpeed={500}
          shadow
        />
        <div className="grid grid-cols-2 hover:cursor-pointer" onClick={goHome}>
          <img src={toolhub} alt="logo" className="h-20 w-20" />
          <h2 className="text-center text-cyan-50">Tool Hub</h2>
          {/* <h1 className="logoname">Tools hub</h1> */}
        </div>
        <nav className="grid justify-center mt-8 ">
          <ul className="grid grid-cols-3 gap-6 ">
            <li className="grid justify-center place-content-center">
              <h1 className="text-white font-bold hover:text-zinc-300">
                About
              </h1>
            </li>
            <li className="grid justify-center place-content-center">
              <h1 className="text-white font-bold hover:text-zinc-300">
                Services
              </h1>
            </li>
            <li className="grid">
              <button className=" bg-transparent border-none text-white font-bold hover:text-zinc-300">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navlinks;
