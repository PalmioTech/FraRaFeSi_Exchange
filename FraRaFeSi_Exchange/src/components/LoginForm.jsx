import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userSlice";
import MD5 from "crypto-js/md5";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils";

export function LoginForm({ setPageHandler }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isShaking, setIsShaking] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    checkAuthentication(email, password);
  }

  async function checkAuthentication(email, password) {
    try {
      const userArray = await fetch(`${BASE_URL}/users?email=${email}`).then(
        (r) => r.json()
      );
      const user = userArray[0];
      console.log(user);
      const encryptedPassword = MD5(password).toString();
      if (user.password === encryptedPassword) {
        const userDataSaved = {
          name: user.name,
          email: user.email,
          password: user.password,
        };
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          balance: user.balance,
          hash: user.hash,
          wallet: user.wallet,
        };
        console.log(userDataSaved);

        dispatch(setUser(userData));
        sessionStorage.setItem("userDataSaved", JSON.stringify(userDataSaved));
        setPageHandler("wallet");
      } else {
        errorForm();
      }
    } catch (error) {
      console.error("Authentication error:", error);
      errorForm();
    }
  }

  function errorForm() {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
    toast.error("Email e/o password errata");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`relative z-10 overflow-hidden border-b-2 border-gray-300 rounded-lg ${
          isShaking ? "animate-shake" : ""
        }`}
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full">
        <input
          ref={emailRef}
          type="text"
          name="email"
          id="email"
          className={`block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-blackText ${
            isShaking ? "animate-shake" : ""
          }`}
          placeholder="Indirizzo Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          className={`block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-blackText ${
            isShaking ? "animate-shake" : ""
          }`}
          placeholder="Password"
        />
        <div className="block">
          <button className="w-full px-3 py-4 font-medium text-white bg-violet rounded-lg">
            Accedi
          </button>
        </div>
      </div>
    </form>
  );
}
