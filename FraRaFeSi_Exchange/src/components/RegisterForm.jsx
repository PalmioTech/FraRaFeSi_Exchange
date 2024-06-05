import { useRef } from "react";
import { useRegisterUserMutation } from "../reducers/apiSlice";
import { MD5 } from "crypto-js";
import toast from "react-hot-toast";
import { generateRandomString, validateEmail } from "../utils";

export function RegisterForm({ setView }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [registerUser] = useRegisterUserMutation();

  async function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const hashCode = generateRandomString();

    const cryptedPassword = MD5(password).toString();

    if (name === "" || email === "" || password === "") {
      toast.error("Tutti i campi sono obbligatori");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Il tuo indirizzo email non è valido!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/users?email=${email}`
      );
      const existingUsers = await response.json();

      if (existingUsers.length > 0) {
        toast.error("L'indirizzo email è già registrato!");
        return;
      }

      toast.promise(
        registerUser({
          name,
          email,
          password: cryptedPassword,
          balance,
          hash: hashCode,
          wallet: [],
        }).unwrap(),
        {
          loading: "Registro utente...",
          error: "Si è verificato un errore durante la tua registrazione",
          success: () => {
            setView("login");
            return "Registrazione avvenuta con successo!";
          },
        }
      );
    } catch (error) {
      toast.error("Errore durante il controllo dell'email");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="relative z-10 overflow-hidden  border-b-2 border-gray-300 rounded-lg"
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full"
      >
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          className="block w-full px-4 py-3 mb-4 border  border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 text-blackText "
          placeholder="Nominativo"
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          className="block w-full px-4 py-3 mb-4 border  border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 text-blackText "
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
