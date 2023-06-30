import { Container, Image } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Container fluid>
        <div className="text-center">
          <Image
            src="https://images.ctfassets.net/1wryd5vd9xez/6imn4PsoUBr6I9Hs8jWxk4/b28965e1afec63588266cf42ba5178ae/https___cdn-images-1.medium.com_max_2000_1_7hkI-ZKsglnbjxCRV1bMZA.png"
            roundedCircle
            className="profileImage my-2"
          />
          <div className="infoHeaderEmployee text-light">
            <div className="idEmployee d-inline me-3">id-empleado</div>
            <div className="position d-inline me-3">Puesto</div>
            <div className="department d-inline me-3">Departamento</div>
            <div className="email d-inline">correo@naagura.com</div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
