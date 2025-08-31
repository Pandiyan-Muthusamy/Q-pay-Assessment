export default function Banner() {
  return (
    <div className="w-full bg-white rounded-xl shadow-md border border-green-800 overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch justify-between">
        <div className="bg-gradient-to-r from-background-primary to-background-secondary text-white p-8 md:p-10 w-full md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold leading-snug">
              Pay ₹1/<span className="text-lg font-medium">month*</span> for the{" "}
              <span className="font-extrabold">QPay POS Device</span>
            </h2>
            <p className="mt-3 text-gray-200 text-sm md:text-base">
              One device for accepting all modes of payments
            </p>
          </div>
          <button className="mt-6 w-fit bg-white text-text-primary font-semibold px-4 py-1.5 rounded-md shadow hover:bg-gray-100 transition text-sm">
            Download App Now!
          </button>
        </div>
        <div className="hidden md:block w-[2px] bg-gradient-to-b from-background-primary to-background-secondary"></div>
        <div className="flex justify-center items-center bg-white p-6 md:w-1/3 w-full">
          <img
            src="/assets/POS-Device.png"
            alt="POS Device"
            className="w-[250px] md:w-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
