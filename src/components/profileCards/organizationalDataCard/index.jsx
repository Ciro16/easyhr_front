import "./organizationalDataCard.css";

const OrganizationalDataCard = () => {
  return (
    <section className="organizationalDataCard border ps-3 pt-3">
      <header>
        <h6>Datos organizativos</h6>
      </header>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span>Sociedad</span>
        <span> 001</span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span>Departamento</span>
        <span> Un Departamento</span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span>Posición</span>
        <span>Gerente</span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span>Puesto</span>
        <span>No se</span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span>Ubicación</span>
        <span>Haiti</span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span>Localidad</span>
        <span>Haiti</span>
      </div>
    </section>
  );
};

export default OrganizationalDataCard;
