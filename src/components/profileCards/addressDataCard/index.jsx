import PropTypes from "prop-types";

import "./addressDataCard.css";

const AddressDataCard = ({ addressDataInfo }) => {
  return (
    <section className="addressDataCard border ps-3 pt-3">
      <header>
        <h6> Dirección </h6>
      </header>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> País </span>
        <span> {addressDataInfo?.t_Gblnd || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Dirección </span>
        <span> {addressDataInfo?.name2 || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Número </span>
        <span> {addressDataInfo?.num01 || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Calle </span>
        <span> {addressDataInfo?.num02 || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Código postal </span>
        <span> {addressDataInfo?.num03 || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Detalles adicionales </span>
        <span> {addressDataInfo?.locat || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Persona de contacto </span>
        <span> {addressDataInfo?.pers1 || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Teléfono </span>
        <span> {addressDataInfo?.tel1 || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Sector </span>
        <span> {addressDataInfo?.sects || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Estado </span>
        <span> {addressDataInfo?.estat || "-"} </span>
      </div>

      <div className="addressInfo my-2 pe-3 d-flex justify-content-between">
        <span> Google location </span>
        <a href={addressDataInfo?.gloca} target="_blank" rel="noreferrer"> {addressDataInfo?.gloca || "-"} </a>
      </div>
    </section>
  );
};

AddressDataCard.propTypes = {
  addressDataInfo: PropTypes.object,
};

export default AddressDataCard;
