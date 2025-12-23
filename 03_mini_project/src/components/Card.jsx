import { Bookmark } from "lucide-react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src={props.brand}
          alt=""
        />
        <button>
          Save
          <Bookmark size = {12}  />{" "}
        </button>
      </div>

      <div className="center">
        <h3>{props.company} <span>{props.date}</span></h3>
        <h2>{props.postname}</h2>
        <div className="tag">
          <h4>{props.tagFirst}</h4>
          <h4>{props.tagSecond}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          
            <h3>${props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
       
      </div>                                              
    </div>
  );
};

export default Card;
