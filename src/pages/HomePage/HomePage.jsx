import logo from "../../images/logoSlimMom.png";

const HomePage = () => {
  return (
    <section className="bg-image w-full h-full laptop:h-[100vh] overflow-hidden">
      <div className="screen-max-width flex flex-col pl-6 pt-12 gap-20">
        <nav className="flex items-baseline gap-4">
          <img
            src={logo}
            alt="Website Logo"
            width={167}
            height={66}
            className=""
          />
          <span className="bg-slate-300 h-8 w-px"></span>
          <div className="flex flex-row gap-6 h-[17px]">
            <button className="text-slate-300 text-sm font-bold hover:text-slate-500 focus:text-slate-500 transition-all duration-300">
              LOGIN
            </button>
            <button className="text-slate-300 text-sm font-bold hover:text-slate-500 focus:text-slate-500 transition-all duration-300">
              REGISTER
            </button>
          </div>
        </nav>
        <div className="flex flex-col gap-12">
          <h2 className="text-slate-800 text-3xl font-bold w-3/6">
            Calculate your daily calorie intake right now
          </h2>
          <form className="flex flex-col">
            <div className="flex flex-wrap gap-8 w-[600px]">
              <input
                type="text"
                placeholder="Height (in cm) *"
                className="w-60 bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600"
              />
              <input
                type="text"
                placeholder="Desired weight (in kg) *"
                className="w-60 bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600"
              />
              <input
                type="text"
                placeholder="Age *"
                className="w-60 bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600"
              />
              <select
                name="blood"
                id="blood"
                className="appearance-none w-60 bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600"
              >
                <option value="" disabled selected className="bg-slate-100 p-2">
                  Blood type *
                </option>
                <option value="O" className="bg-slate-100 p-2">
                  O
                </option>
                <option value="A" className="bg-slate-100 p-2">
                  A
                </option>
                <option value="B" className="bg-slate-100 p-2">
                  B
                </option>
                <option value="AB" className="bg-slate-100 p-2">
                  AB
                </option>
              </select>
              {/* <input
                type="text"
                placeholder="Blood type *"
                className="w-60 bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600"
              /> */}
              <input
                type="text"
                placeholder="Current weight (in kg) *"
                className="w-60 bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600"
              />
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full w-52 mt-10 mb-12 hover:bg-orange-600 hover:scale-105 transition-all duration-300">
              Start losing weight
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
