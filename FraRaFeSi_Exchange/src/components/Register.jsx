import LogoApp from "../assets/logoApp.png";
import { RegisterForm } from "./RegisterForm";
export default function Register({ setView }) {
  return (
    <div className="flex  h-full justify-center">
      <div className="flex flex-col justify-evenly p-4">
        <div className="flex justify-center items-center">
          <img className="w-full max-w-56" src={LogoApp} />
        </div>

        <div className="flex flex-col items-center gap-3 text-whiteText">
          <div className="flex flex-col gap-10">
            <h3 className="mb-6 text-2xl font-medium text-center">Register </h3>
            <RegisterForm setView={setView} />
            <button
              className="w-full px-6 py-2 "
              onClick={() => setView("login")}
            >
              Hai già un'account? Accedi!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
