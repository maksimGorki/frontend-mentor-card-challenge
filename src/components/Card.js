import React from "react";
import { ReactComponent as Sedans } from "../projectFiles/images/icon-sedans.svg";
import { ReactComponent as Suvs } from "../projectFiles/images/icon-suvs.svg";
import { ReactComponent as Luxury } from "../projectFiles/images/icon-luxury.svg";

const cardProps = {
  sedans: {
    cardStyle: "card1",
    btnStyle: "sedanBtn",
    carLogo: <Sedans />,
    carDescription:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  suvs: {
    cardStyle: "card2",
    btnStyle: "suvBtn",
    carLogo: <Suvs />,
    carDescription:
      "Take a SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  luxury: {
    cardStyle: "card3",
    btnStyle: "luxuryBtn",
    carLogo: <Luxury />,
    carDescription:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
};

const Card = ({ carName }) => {
  const cardExtraProps = cardProps[carName];

  return (
    <div className={`card ${cardExtraProps.cardStyle}`}>
      <div className="infoContainer">
        {cardExtraProps.carLogo}
        <div className="carTypeHeader">{carName}</div>
        <div className="carTypeDetails">{cardExtraProps.carDescription}</div>
      </div>
      <div className={`learnMoreBtn ${cardExtraProps.btnStyle}`}>
        Learn More
      </div>
    </div>
  );
};

export default Card;
