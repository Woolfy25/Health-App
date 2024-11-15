import logo from "../../images/logoSlimMom.png";

const HomePage = () => {
  return (
    <section className="bg-image w-full h-[100vh]">
      <div className="screen-max-width flex flex-col pl-4 pt-16 gap-24">
        <nav className="flex items-baseline gap-4">
          <img src={logo} alt="Website Logo" width={167} height={66} />
          <span className="bg-slate-300 h-8 w-px"></span>
          <div className="flex flex-row gap-6 h-[17px]">
            <button className="text-slate-300 text-sm font-bold">LOGIN</button>
            <button className="text-slate-300 text-sm font-bold">
              REGISTER
            </button>
          </div>
        </nav>
        <div className="flex flex-col gap-16">
          <h2 className="text-slate-800 text-3xl font-bold w-5/12">
            Calculate your daily calorie intake right now
          </h2>
          <form className="flex flex-col">
            <div className="flex flex-wrap w-3/6 gap-10">
              <input type="text" placeholder="Height" className="w-60" />
              <input
                type="text"
                placeholder="Desired weight"
                className="w-60"
              />
              <input type="text" placeholder="Age" className="w-60" />
              <input type="text" placeholder="Blood type" className="w-60" />
              <input
                type="text"
                placeholder="Current weight"
                className="w-60"
              />
            </div>
            <button>Start losing weight</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
