import PropTypes from "prop-types";
import OrganizationalCard from "../organizationalCard";

const OrganizationalLevel = ({ person, brothers, level }) => {
  return (
    <ul>
      <OrganizationalCard person={person} level={level} />

      {brothers &&
        brothers.map((infoCard) => (
          <OrganizationalCard
            key={crypto.randomUUID()}
            person={infoCard.person}
            level={infoCard.level}
          />
        ))}
    </ul>
  );
};

OrganizationalLevel.propTypes = {
  person: PropTypes.string,
  level: PropTypes.array,
  brothers: PropTypes.array,
};

export default OrganizationalLevel;
