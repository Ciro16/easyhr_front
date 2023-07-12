import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { _httpClient, parseJwt } from "../../utils/httpClient";
import { setCookie } from "../../utils/cookiesActions";

import "./login.css";
import easyLogo from "../../assets/white_logo_transparent_background.png";
import useStore from "../../store/store";
import Spinner from "../../components/spinner";

import { toast } from "sonner";

const initialFormValues = () => {
  return {
    rnc: "",
    usuario: "",
    clave: "",
  };
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false)

  const navigate = useNavigate();

  const setAuth = useStore((state) => state.setIsAuth);
  const setUserInfo = useStore((state) => state.setUserInfo);

  const handleChange = (e) => {
    const inputName = e.target.name,
      inputValue = e.target.value;

    if (inputName === "rnc") {
      if (e.target.checkValidity() || inputValue === "") {
        setLoginForm({
          ...loginForm,
          [inputName]: inputValue,
        });
      }
    } else {
      setLoginForm({
        ...loginForm,
        [inputName]: inputValue,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await _httpClient.post(`authenticate/login`, loginForm);

      const payload = parseJwt(data.token);

      const expirationTime = new Date(payload.exp * 1000);

      setCookie("_auth_token", data.token, expirationTime);

      setUserInfo({ userId: data.pernr });
      setAuth(true);

      return navigate("/dashboard");
    } catch (error) {
      toast.error("Error en las credenciales");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}

      <div className="bgLogin">
        <form className="formContainer" onSubmit={handleLogin}>
          <img src={easyLogo} alt="" className="easyLogo img-fluid" />
          <p className="text-white">Portal Auto-Servicio Empleados</p>
          <div className="inputContainer">
            <input
              value={loginForm.rnc}
              onChange={handleChange}
              name="rnc"
              type="text"
              pattern="[0-9]+"
              required
              placeholder="RNC"
              className="form-control"
              id="inputRnc"
            />
          </div>

          <div className="inputContainer">
            <input
              value={loginForm.usuario}
              onChange={handleChange}
              name="usuario"
              type="text"
              required
              placeholder="Username"
              className="form-control"
              id="inputUser"
            />
          </div>

          <div className="inputContainer">
            <input
              value={loginForm.clave}
              onChange={handleChange}
              name="clave"
              type="password"
              required
              placeholder="Password"
              className="form-control"
              id="inputPassword"
            />
          </div>
          <div className="buttonsContainer d-flex justify-content-between">
            <input type="submit" value="Iniciar sesión" />
            <input type="button" value="Solicitar acceso" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
