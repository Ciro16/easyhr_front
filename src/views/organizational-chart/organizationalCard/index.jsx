import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import OrganizationalLevel from "../organizationalLevel";

import withoutPicture from "../../../assets/without_profile.png"

const OrganizationalCard = ({ infoCard, childs }) => {
  return (
    <li>
      <div className="organizationalChartCard position-relative">
        <span className="headx position-absolute top-0 end-0 me-1">{infoCard.headx}</span>
        <Image
          src={infoCard.picture ?? withoutPicture}
          roundedCircle
          className="cardImage"
          alt="Organizational image"
        />
        <div className="cardInfo">
          <span className="d-block text-center text-wrap name mt-2 mb-1">
            {infoCard.orgeh}
          </span>
          <span className="d-block text-center cargo mb-1">{`${infoCard.descr} | ${infoCard.stext}`}</span>
          {
          infoCard.pernr !== 0 && infoCard.pernr !== undefined &&
            <span className="d-block text-center cargo">{`${infoCard.cname} ${infoCard.pernr}`}</span>
          }
        </div>
      </div>

      <OrganizationalLevel
        key={crypto.randomUUID()}
        father={childs}
        childs={[]}
      />
    </li>
  );
};

OrganizationalCard.propTypes = {
  infoCard: PropTypes.object,
  childs: PropTypes.array,
};

export default OrganizationalCard;
