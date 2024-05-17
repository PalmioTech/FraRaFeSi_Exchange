import { useRef } from "react";

export function RegisterForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password, name);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="relative z-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg"
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full"
      >
        <input
          ref={nameRef}
          type="name"
          name="email"
          id="email"
          className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          data-rounded="rounded-lg"
          data-primary="blue-500"
          placeholder="Nominativo"
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          className="block w-full px-4
        py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg
        focus:ring focus:ring-blue-500 focus:outline-none"
          data-rounded="rounded-lg"
          data-primary="blue-500"
          placeholder="Indirizzo Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          data-rounded="rounded-lg"
          data-primary="blue-500"
          placeholder="Password"
        />
        <div className="block">
          <button
            className="w-full px-3 py-4 font-medium text-white bg-violet rounded-lg"
            data-primary="blue-600"
            data-rounded="rounded-lg"
          >
            Registrati
          </button>
        </div>
      </div>
    </form>
  );
}
