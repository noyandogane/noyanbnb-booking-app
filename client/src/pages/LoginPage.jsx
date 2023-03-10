import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const { setUser } = useContext(UserContext);
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    const {data} = axios  
      .post("/login", { email, password })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        alert("Login successful!");
        setRedirect(true);
        setUser({data});
      })
      .catch((err) => {
        alert("Login failed!");
      });
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4 p-10 grow flex justify-around items-center">
      <div className="mb-44">
        <h1 className="text-3xl mb-10 text-center">Welcome back!</h1>
        <form className="max-w-md w-96 mx-auto" onSubmit={handleLoginSubmit}>
          <input
            className="p-2 border-t border-x rounded-t-xl"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <div className="border"></div>
          <input
            className="p-2 border-b border-x rounded-b-xl mb-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="p-2 login" type="submit">
            Login
          </button>
          <div className="text-center mt-4 font-semibold text-gray-500 ">
            No account?{" "}
            <Link
              className="hover:border-b-2 underline text-black hover:text-[#f5385d] "
              to={"/register"}
            >
              Register now!
            </Link>
            {/* add forgot password */}
            {/* add captcha */}
          </div>
        </form>
      </div>
    </div>
  );
}
