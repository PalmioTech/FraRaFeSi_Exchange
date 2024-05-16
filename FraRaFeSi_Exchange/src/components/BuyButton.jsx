import { BuyButtonIcon } from "./BuyButtonIcon";

export function BuyButton() {
  return (
    <div className="flex justify-around flex-wrap">
      <div className="flex flex-col items-center mx-4 my-3">
        <button className="flex justify-center max-w-10 rounded-full bg-violet w-full py-2 mx-2 mt-3 hover:outline hover:outline-2 hover:outline-greenwater">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-greenwater"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </button>
        <span className="mt-2 text-whiteText">Buy</span>
      </div>
      <div className="flex flex-col items-center mx-4 my-3">
        <button className="flex justify-center max-w-10 rounded-full bg-violet w-full py-2 mx-2 mt-3 hover:outline hover:outline-2 hover:outline-greenwater">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-greenwater"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
        <span className="mt-2 text-whiteText">Sell</span>
      </div>
      <div className="flex flex-col items-center mx-4 my-3">
        <button className="flex justify-center max-w-10 rounded-full bg-violet w-full py-2 mx-2 mt-3 hover:outline hover:outline-2 hover:outline-greenwater">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-greenwater"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </button>
        <span className="mt-2 text-whiteText">Swap</span>
      </div>
      <div className="flex flex-col items-center mx-4 my-3">
        <button className="flex justify-center max-w-10 rounded-full bg-violet w-full py-2 mx-2 mt-3 hover:outline hover:outline-2 hover:outline-greenwater">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-greenwater"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <span className="mt-2 text-whiteText">Deposit</span>
      </div>
    </div>
  );
}
