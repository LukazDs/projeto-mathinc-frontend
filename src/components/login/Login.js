import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../assets/loaders/Loading";
import UserContext from "../../contexts/UserContext";
import { loginStyle } from "./loginStyle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { token, setToken } = useContext(UserContext);

  async function loginUser(event) {
    event.preventDefault();

    setIsLoading(true);

    const URL = `${process.env.REACT_APP_API_BASE_URL}/user/login`;
    const body = { email, password };

    const promise = axios.post(URL, body, {});

    promise
      .then((res) => {
        setIsLoading(false);
        setToken(res.data);
        localStorage.setItem("token", token);
        navigate("/posts");
      })

      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data);
      });
  }

  return (
    <loginStyle.Container>
      <loginStyle.InfoLogo>
        <div className="logo">
          <span>M</span>
        </div>
        <span>MathInc</span>
      </loginStyle.InfoLogo>
      <loginStyle.Forms onSubmit={loginUser}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          disabled={isLoading}
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          disabled={isLoading}
          required
        />
        <button disabled={isLoading}>
          {isLoading ? <Loading /> : "Login"}
        </button>
      </loginStyle.Forms>
      <Link to={"/register"}>Not registered? Register now.</Link>
    </loginStyle.Container>
  );
}

export default Login;
