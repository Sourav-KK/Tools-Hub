import { NavigateFunction, useNavigate } from "react-router-dom";
import toolhub from "../../assets/ToolHub-removebg-preview.png";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navlinks = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleRedirectHome: () => void = () => {
    navigate("/");
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const [progress, setProgress] = useState<number>(0);
  const [dropDown, setDropDown] = useState<boolean>(false);

  useEffect(() => {
    setProgress(progress + 100);
  }, []);

  return (
    <>
      <LoadingBar
        color="#f11946"
        height={1}
        progress={progress}
        loaderSpeed={500}
        shadow
      />
      <nav className="navbar">
        <div className="logo-holder" onClick={handleRedirectHome}>
          <img src={toolhub} alt="" className="logo" />
          <div className="logo-text">
            <h4>TOOL-HUB</h4>
          </div>
        </div>

        <div className="ham-contaier">
          <div className="ham">
            {dropDown ? (
              <X
                id="close"
                color="white"
                size={40}
                onClick={handleDropDown}
                style={dropDown ? { display: "flex" } : { display: "none" }}
              />
            ) : (
              <Menu
                color="white"
                size={40}
                id="hamburger"
                onClick={handleDropDown}
                style={!dropDown ? { display: "flex" } : { display: "none" }}
              />
            )}
          </div>
        </div>

        <div className="navlink-holder">
          <h4>About</h4>
          <h4 onClick={handleRedirectHome}>Home</h4>
          <h4>login</h4>
        </div>
      </nav>

      {dropDown && (
        <div className="navlink-drop">
          <h4>About</h4>
          <h4 onClick={handleRedirectHome}>Home</h4>
          <h4>login</h4>
        </div>
      )}
    </>
  );
};

export default Navlinks;
