import LogoApp from "../assets/logoApp.png";
export default function Splash({ setPageHandler }) {
  return (
    <div className="flex  h-full ">
      <div className="flex flex-col justify-evenly p-4">
        <div>
          <img className="w-full max-w-xs" src={LogoApp} />
        </div>

        <div className="flex flex-col items-center gap-3 text-whiteText">
          <h1 className="text-4xl font-bold text-center">FraRaFeSi</h1>
          <div className="flex flex-col gap-10">
            <p className="text-center text-2xl">Exchange</p>
            <button
              className="w-full px-6 py-2 font-bold text-violet border-2 rounded-full hover:bg-grayBG"
              onClick={() => setPageHandler("wallet")}
            >
              Entra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
