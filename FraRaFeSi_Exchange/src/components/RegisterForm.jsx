import { useRef, useState } from "react";
import { useRegisterUserMutation } from "../reducers/apiSlice";
import { MD5 } from "crypto-js";

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000) + 1;
}

export function RegisterForm() {
  const [isRegistered, setIsRegistered] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [registerUser] = useRegisterUserMutation();

  function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const hashCode = generateRandomString();
    const balance = generateRandomNumber(); // Genera un saldo casuale
    const cryptedPassword = MD5(password).toString();

    registerUser({
      name,
      email,
      password: cryptedPassword,
      balance,
      hash: hashCode,
    })
      .unwrap()
      .then(() => {
        setIsRegistered(true);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  }

  function generateRandomString() {
    var passwordHash = "";
    var randomCaracter =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    for (var i = 0; i < 25; i++) {
      var randomPoz = Math.floor(Math.random() * randomCaracter.length);
      passwordHash += randomCaracter.substring(randomPoz, randomPoz + 1);
    }
    return passwordHash;
  }

  if (isRegistered) {
    return (
      <div className="w-full p-4 text-center bg-green-100 rounded-lg">
        <p className="text-green-800">Registrazione avvenuta con successo!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="relative z-10 overflow-hidden  border-b-2 border-gray-300 rounded-lg"
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full">
        <input
          ref={nameRef}
          type="name"
          name="email"
          id="email"
          className="block w-full px-4 py-3 mb-4 border  border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 text-blackText "
          placeholder="Nominativo"
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          className="block w-full px-4
        py-3 mb-4 border  border-transparent border-gray-200 rounded-lg
        focus:ring focus:ring-blue-500 text-blackText "
          placeholder="Indirizzo Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          className="block w-full px-4 py-3 mb-4 border  border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 text-blackText "
          placeholder="Password"
        />
        <div className="block">
          <button className="w-full px-3 py-4 font-medium text-white bg-violet rounded-lg">
            Registrati
          </button>
        </div>
      </div>
    </form>
  );
}
