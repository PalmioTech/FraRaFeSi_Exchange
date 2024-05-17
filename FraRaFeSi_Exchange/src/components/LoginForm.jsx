export function LoginForm() {
  return (
    <form className="w-full mt-16 md:mt-0 md:w-2/5">
      <div
        className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full"
      >
        <input
          type="text"
          name="email"
          id="email"
          className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          data-rounded="rounded-lg"
          data-primary="blue-500"
          placeholder="Email address"
        />
        <input
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
            className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
            data-primary="blue-600"
            data-rounded="rounded-lg"
          >
            Log Me In
          </button>
        </div>
        <p className="w-full mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="#_" className="text-blue-500 underline">
            Sign up here
          </a>
        </p>
      </div>
    </form>
  );
}
