import avatarBatman from "../assets/avatarBatman.svg";

export default function ProfilePage() {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-center mb-8">
        <button>
          <img src={avatarBatman} alt="Avatar" className="max-w-32" />
        </button>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="shadow-lg rounded-lg mb-6 border border-violet">
          <div className="p-4 border-b border-violet">
            <h2 className="text-xl font-bold ">Profile</h2>
          </div>
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6">
              <div>
                <div className="text-sm font-medium">Username</div>
                <div className="mt-1 text-sm ">johndoe</div>
              </div>
              <div>
                <div className="text-sm font-medium ">Email address</div>
                <div className="mt-1 text-sm">johndoe@example.com</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-sm font-medium">Bio</div>
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
                <div className="text-sm font-medium">Wallet Address</div>
                <div className="mt-1 text-sm">0x123456789abcdef</div>
              </div>
              <div>
                <div className="text-sm font-medium">Balance</div>
                <div className="mt-1 text-sm">2.5 ETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
