import HomeCard from "./HomeCard";
import { cardMap } from "../../Utilities/Shortcuts";
import "../../Styles/HomeBody.css";

const Body = () => {
  return (
    <div className="homebody-container">
      <div className="title">
        <h2>Welcome to ToolHub</h2>
      </div>
      <div className="home-about">
        <h3>
          We provide various tools for your basic task for free. So jump in and
          enjoy!
        </h3>
      </div>
      <div className="card-container">
        <div className="tool-container">
          <h2>what we offer</h2>
        </div>
        <div className="cards">
          {cardMap.map((elem) => (
            <HomeCard
              title={elem.title}
              body={elem.body}
              icon={elem.icon}
              link={elem.link}
              key={elem.count}
            />
          ))}
        </div>
      </div>{" "}
      */
    </div>
  );
};

export default Body;
