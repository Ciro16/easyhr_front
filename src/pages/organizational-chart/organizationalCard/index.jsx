import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import OrganizationalLevel from "../organizationalLevel";

const OrganizationalCard = ({ person, level }) => {
  return (
    <li>
      <div className="organizationalChartCard">
        <Image
          src="https://images.ctfassets.net/1wryd5vd9xez/6imn4PsoUBr6I9Hs8jWxk4/b28965e1afec63588266cf42ba5178ae/https___cdn-images-1.medium.com_max_2000_1_7hkI-ZKsglnbjxCRV1bMZA.png"
          roundedCircle
          className="cardImage"
        />
        <div className="cardInfo">
          <span className="d-block text-start name mt-2">{person}</span>
          <span className="d-block text-start lastname mb-1">Antonieta</span>
          <span className="d-block text-start cargo">La jefa</span>
        </div>
      </div>
      {level &&
        level.map((card) => (
          <OrganizationalLevel
            key={crypto.randomUUID()}
            person={card.person}
            brothers={card.brothers}
          />
        ))}
    </li>
  );
};

OrganizationalCard.propTypes = {
  person: PropTypes.string,
  level: PropTypes.array,
};

export default OrganizationalCard;
