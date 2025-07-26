import whereLand from "../assets/images/map.png";
import texas from "../assets/images/texas.jpg";
import florida from "../assets/images/florida.jpeg";

const WhereWeLand = () => {
  return (
    <div>
      <div className="bg-green-800 py-16">
        <div className="md:pl-[154px] pl-20 pt-5 mb-20">
          <h1 className="text-[56px] font-black  text-white">WHERE WE LAND</h1>
          <p className="text-white text-[24px]">
            Ridge Street provides hard money loans to real estate investors in
            35 states.{" "}
          </p>
          <p className="text-white text-[24px]">
            We focus our efforts in{" "}
            <span className="text-[32px] font-bold">Texas</span> and{" "}
            <span className="text-[32px] font-bold">Florida</span>.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img className="w-1/2" src={whereLand} alt="" />
        </div>

        {/* <div className="md:flex justify-center items-center gap-10 p-20 w-1/2 mx-auto">
            <img className="object-cover w-60 h-96 rounded-tr-4xl rounded-bl-4xl" src={texas} alt="" />
            <img className="object-cover w-60 h-96 rounded-tl-4xl rounded-br-4xl" src={florida} alt="" />
        </div> */}

        <div className="md:flex justify-center items-center gap-10 py-16 w-1/2 mx-auto">
          <div className="relative w-64 h-80 rounded-tr-4xl border-white border-2 rounded-bl-4xl overflow-hidden">
            {/* Background Image */}
            <img
              src={florida}
              alt="Texas"
              className="absolute inset-0 w-full h-full object-cover  "
            />

            {/* Green Overlay */}
            <div className="absolute inset-0 bg-green-600  opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 text-center">
              <h2 className="text-2xl font-bold mb-2">Texas</h2>
              <p className="text-sm mb-4">
                Hard Money Loans <span className="mx-1 text-white">|</span> DSCR
                Loans
              </p>
              <button className="border border-white rounded-full px-4 py-2 text-sm hover:bg-white hover:text-green-600 transition">
                VIEW ALL LOCATIONS
              </button>
            </div>
          </div>

          {/* image 2  */}

          <div className="relative w-64 h-80 rounded-tr-4xl border-white border-2 rounded-bl-4xl overflow-hidden">
            {/* Background Image */}
            <img
              src={texas}
              alt="Texas"
              className="absolute inset-0 w-full h-full object-cover  "
            />

            {/* Green Overlay */}
            <div className="absolute inset-0 bg-green-600  opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 text-center">
              <h2 className="text-2xl font-bold mb-2">Florida</h2>
              <p className="text-sm mb-4">
                Hard Money Loans <span className="mx-1 text-white">|</span> DSCR
                Loans
              </p>
              <button className="border border-white rounded-full px-4 py-2 text-sm hover:bg-white hover:text-green-600 transition">
                VIEW ALL LOCATIONS
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-5 flex justify-center">
          <button className="p-6 bg-white text-green-800 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition">
            GET APPROVED ONLINE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhereWeLand;
