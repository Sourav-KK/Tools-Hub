import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./homeCard.css";
interface HomeI {
  title: string;
  icon: React.ReactNode;
  body: string;
  link: string;
}
const HomeCard: React.FC<HomeI> = ({ title, body, icon, link }) => {
  const navigate = useNavigate();

  const gotTo = () => {
    navigate(link);
  };
  return (
    <div onClick={gotTo} className="homeCard">
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
