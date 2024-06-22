import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HomeI } from "../../Utilities/Interfaces";

const HomeCard: React.FC<HomeI> = ({ title, body, icon, link }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(link);
  };
  return (
    <div onClick={handleRedirect} className="homeCard">
      <div className="title-homecard">
        <h1 className="title">{title}</h1>
        <div className="icon_holder">{icon}</div>
      </div>

      <div className="body_homecard">
        <h4>{body}</h4>
        <div className="arrow_homecard">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
