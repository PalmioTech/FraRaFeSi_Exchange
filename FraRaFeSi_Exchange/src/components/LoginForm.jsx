import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userSlice";
import MD5 from "crypto-js/md5";
import { useGetUserByEmailQuery } from "../reducers/apiSlice";
import toast from "react-hot-toast";

export function LoginForm({ setPageHandler }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isShaking, setIsShaking] = useState(false);
  const [email, setEmail] = useState(null);

  const {
    data: user,
    error,
    isLoading,
  } = useGetUserByEmailQuery(email, {
    skip: !email,
  });

  useEffect(() => {
    if (user && user.length > 0) {
      const currentUser = user[0];
      const password = passwordRef.current.value;
      checkAuthentication(currentUser, email, password);
    } else if (user && user.length === 0) {
      errorForm();
    }
  }, [user]);

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    setEmail(email);
  }

  function checkAuthentication(user, email, password) {
    const encryptedPassword = MD5(password).toString();
    if (user.password === encryptedPassword) {
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        balance: user.balance,
        hash: user.hash,
      };
      dispatch(setUser(userData));
      sessionStorage.setItem("userData", JSON.stringify(userData));
      setPageHandler("wallet");
    } else {
      errorForm();
    }
  }

  function errorForm() {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
    toast.error("Email e/o password errata");
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`relative z-10 overflow-hidden border-b-2 border-gray-300 rounded-lg ${
          isShaking ? "animate-shake" : ""
        }`}
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full"
      >
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
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
    </form>
  );
}
