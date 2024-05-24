import { useState } from "react";
import LogoApp from "../assets/logoApp.png";
import { LoginForm } from "./LoginForm";
export default function Login({ setView }) {
  return (
    <div className="flex  h-full justify-center">
      <div className="flex flex-col justify-evenly p-4">
        <div className="flex justify-center items-center my-10">
          <img className="w-full max-w-56" src={LogoApp} />
        </div>

        <div className="flex flex-col items-center gap-3 text-whiteText">
          <div className="flex flex-col gap-10">
            <h3 className="mb-2 text-2xl font-medium text-center">
              Effettua l'accesso
            </h3>
            <LoginForm />
            <button
              className="w-full px-6 py-2"
              onClick={() => setView("register")}
            >
              Non hai l'account? Registrati!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
