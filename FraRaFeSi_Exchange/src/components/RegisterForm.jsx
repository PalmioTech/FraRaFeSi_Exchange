import { useRef, useState } from "react";

export function RegisterForm() {
  const [isRegistered, setIsRegistered] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    registerUser({ name, email, password });
  }

  function registerUser({ name, email, password }) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (response.ok) {
          setIsRegistered(true);
        }
        return response.json();
      })
      .catch((error) => console.error("Error fetching data:", error));
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
