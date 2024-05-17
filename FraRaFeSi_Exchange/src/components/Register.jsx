import { useState } from "react";
import LogoApp from "../assets/logoApp.png";
export default function Register({ setView }) {
  return (
    <div className="flex  h-full justify-center">
      <div className="flex flex-col justify-evenly p-4">
        <div>
          <img className="w-full max-w-xs" src={LogoApp} />
        </div>

        <div className="flex flex-col items-center gap-3 text-whiteText">
          <div className="flex flex-col gap-10">
            <h2>Register</h2>
            <form></form>
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
