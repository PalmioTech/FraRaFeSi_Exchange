import { useRef, useState } from "react";

export function LoginForm({ setIsAuthenticated, setPageHandler }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [posts, setPosts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        checkAuthentication(posts, email, password);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  function checkAuthentication(users, email, password) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setPageHandler("wallet");
    } else {
      setIsAuthenticated(false);
    }
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
          className="block w-full px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-blackText "
          placeholder="Indirizzo Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          className="block w-full px-4 py-3 mb-4 border  border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-blackText"
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
