const UserSidebar = () => {
  return (
    <section className="w-2/5 flex flex-col pt-12 gap-24 bg-neutral-100 pl-8 tablet:w-full tablet:h-full tablet:pt-16 tablet:pb-16 tablet:pl-6 tablet:pr-6 phone:w-full phone:h-full phone:pt-16 phone:pb-16 phone:pl-3 phone:pr-3">
      <div className="flex justify-end items-center gap-3 mt-8 pr-6 tablet:hidden phone:hidden">
        <p className="text-sm font-bold text-slate-500">Name</p>
        <div className="bg-slate-300 h-8 w-[2px] tablet:hidden phone:hidden"></div>
        <button type="button" className="text-sm font-bold text-slate-400">
          Exit
        </button>
      </div>
      <div className="flex flex-col gap-14 tablet:flex-row tablet:flex-wrap tablet:w-full">
        <div className="flex flex-col gap-6 tablet:w-72">
          <h3 className="text-base font-bold text-slate-800">
            Summary for placeholder date
          </h3>
          <div className="flex flex-row justify-between w-4/5 tablet:w-full phone:w-full">
            <ul className="flex flex-col gap-2">
              <li className="text-base font-thin text-slate-400">Left</li>
              <li className="text-base font-thin text-slate-400">Consumed</li>
              <li className="text-base font-thin text-slate-400">Daily rate</li>
              <li className="text-base font-thin text-slate-400">
                n% of normal
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="text-base font-thin text-slate-400">000 cal</li>
              <li className="text-base font-thin text-slate-400">000 cal</li>
              <li className="text-base font-thin text-slate-400">000 cal</li>
              <li className="text-base font-thin text-slate-400">000 cal</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-base font-bold text-slate-800">
            Food not recommended
          </h3>
          <p className="text-base font-thin text-slate-400">
            Your diet will be displayed here
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserSidebar;
