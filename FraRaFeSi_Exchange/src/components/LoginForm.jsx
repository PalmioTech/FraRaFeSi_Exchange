import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userSlice";
import MD5 from "crypto-js/md5";

export function LoginForm({ setPageHandler, setUserData }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isShaking, setIsShaking] = useState(false);
  const [posts, setPosts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    fetch("http://localhost:3000/users?email=" + email)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        checkAuthentication(posts, email, password);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function checkAuthentication(users, email, password) {
    const encryptedPassword = MD5(password).toString();
    const user = users.find(
      (user) => user.email === email && user.password === encryptedPassword
    );
    if (user) {
      const userData = {
        name: user.name,
        email: user.email,
        password: user.password,
        balance: user.balance,
        hash: user.hash,
      };
      dispatch(setUser(userData));
      sessionStorage.setItem("userData", JSON.stringify(userData));
      setPageHandler("wallet");
      console.log(userData);
    } else {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500); // Fermiamo il tremolio dopo 0.5 secondi
    }
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
    </form>
  );
}
