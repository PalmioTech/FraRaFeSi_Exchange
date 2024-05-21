import { useRef } from "react";

export function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="relative z-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg"
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full"
      >
        <input
          ref={emailRef}
          type="text"
          name="email"
          id="email"
          className=" text-black block w-full px-4 py-3 mb-4 border  border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          data-rounded="rounded-lg"
          data-primary="blue-500"
          placeholder="Indirizzo Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          className="block w-full px-4 py-3 mb-4 border  border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
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
            Accedi
          </button>
        </div>
      </div>
    </form>
  );
}
