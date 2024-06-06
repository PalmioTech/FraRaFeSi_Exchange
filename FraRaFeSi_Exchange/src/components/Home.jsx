import LogoApp from "../assets/logoApp.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <img className="w-full max-w-56" src={LogoApp} />
    </div>
  );
}
