import avatarBatman from "../assets/avatarBatman.svg";

export default function ProfilePage({
  setIsAuthenticated,
  setUserData,
  setPage,
  userData,
}) {
  const { name, email, balance, hash } = userData;

  function handleLogout() {
    sessionStorage.removeItem("userData");
    setIsAuthenticated(false);
    setUserData(null);
    setPage("splash");
  }
  return (
    <div className="py-8 px-4">
      <div className="flex flex-col items-center justify-center mb-8">
        <button>
          <img src={avatarBatman} alt="Avatar" className="max-w-32" />
        </button>
        <button
          onClick={handleLogout}
          className="text-white border border-violet font-bold px-4 py-2 mt-2 rounded-full "
        >
          Log out
        </button>
      </div>
      <div className="max-w-3xl mx-auto text-whiteText">
        <div className="shadow-lg rounded-lg mb-6 border border-violet">
          <div className="p-4 border-b border-violet">
            <h2 className="text-xl font-bold ">Profile</h2>
          </div>
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6">
              <div>
                <div className="text-sm font-bold ">Username</div>
                <div className="mt-1 text-sm ">{name}</div>
              </div>
              <div>
                <div className="text-sm font-bold ">Email address</div>
                <div className="mt-1 text-sm">{email}</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-sm font-bold">Bio</div>
                <div className="mt-1 text-sm ">
                  Crypto enthusiast and blockchain developer.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg mb-8  border border-violet">
          <div className="px-6 py-5 border-b border-violet">
            <h2 className="text-lg font-bold">Wallet</h2>
            <p className="mt-1 text-sm ">Your crypto wallet details.</p>
          </div>
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6">
              <div className="sm:col-span-2">
                <div className="text-sm font-bold">Wallet Address</div>
                <div className="mt-1 text-sm">{hash}</div>
              </div>
              <div>
                <div className="text-sm font-bold">Balance</div>
                <div className="mt-1 text-sm">$ {balance}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
