import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();

    console.log("Envio");
    alert("Enviando os dados: " + username + " - " + password);
  };

  return (
    <div className="container">
      <form onSubmit={handlesubmit}>
        <h1>Acesse Seu Sistema</h1>
        <div className="inputs">
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="inputs">
          <input
            type="password"
            placeholder="senha"
            onChange={(p) => setPassword(p.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="forget-pass">
          <label>
            <input type="checkbox" />
            lembre de mim?
          </label>
          <a href="">Esqueceu sua senha?</a>
        </div>

        <button>Entrar</button>

        <div className="sing">
          <p>
            Não tem uma conta? <a href="">Registre-se</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
