import "./basicInfoCard.css";

const BasicInfoCard = () => {
  return (
    <section className="basicInfoCard border ps-3 pt-3">
      <header>
        <h6>Información básica</h6>
      </header>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span>Nombre completo</span>
        <span> Ciro Perez Iglesias</span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span>Tratamiento</span>
        <span>Sr.</span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span>Género</span>
        <span>Masculino</span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span>Estado civil</span>
        <span>Casado</span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span>Lugar de nacimiento</span>
        <span>Santo Domingo</span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span>Fecha de nacimiento</span>
        <span>16/06/1994</span>
      </div>
    </section>
  );
};

export default BasicInfoCard;
