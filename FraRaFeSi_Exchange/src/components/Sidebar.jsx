import logoApp from "../assets/logoApp.png";
import cryptoImage from "../assets/crypto.svg";
import avatarBatman from "../assets/avatarBatman.svg";
import { useSelector } from "react-redux";

export function Sidebar() {
  const userData = useSelector((state) => state.user);
  const { name } = userData;

  return (
    <div className="flex justify-between flex-row max-w-xl m-4">
      <div>
        <button>
          <img src={logoApp} className="max-w-8" />
        </button>
      </div>
      <div>
        <button className="flex items-center gap-2 rounded-full border border-whiteText p-1 bg-whiteText bg-opacity-10">
          <img src={cryptoImage} className="max-w-4" />
          <p className="text-whiteText">{name}</p>
        </button>
      </div>
      <div>
        <button>
          <img src={avatarBatman} className="max-w-8" />
        </button>
      </div>
    </div>
  );
}
