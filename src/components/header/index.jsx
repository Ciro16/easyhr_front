import { Container, Image } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Container fluid>
        <div className="text-center">
          <Image
            src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
            roundedCircle
            className="profileImage my-2"
          />
          <div className="infoHeaderEmployee text-light">
            <div className="idEmployee d-inline me-3">id-empleado</div>
            <div className="position d-inline me-3">Puesto</div>
            <div className="department d-inline pe-3">Departamento</div>
            <div className="email d-inline">correo@correo.com</div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
