import HomeCard from "./HomeCard";
import "./homeCard.css";
import { cardMap } from "../../Utilities/Shortcuts";

const Body = () => {
  return (
    <div className="home_body">
      <h1 className="welcome">Welcome to ToolsHub</h1>
      <h2 className="welcome_2">
        We offer different services. Click on any of the services below to enjoy
        for free.
      </h2>
      <div className="homeCard-div-holder">
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
    </div>
  );
};

export default Body;
