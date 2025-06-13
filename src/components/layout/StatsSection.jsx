export default function StatsSection() {
  return (
    <div className="bg-white text-white flex justify-center items-center">
      <div className="bg-[#243666] max-w-[1200px] w-full rounded-[40px] flex flex-col md:flex-row justify-around items-center p-[100px] ">
        <div>
          <h2 className="text-[54px] font-bold">3500+</h2>
          <p className="mt-2 text-[20px] font-semibold">Screens</p>
        </div>
        <div>
          <h2 className="text-[54px] font-bold">375 M</h2>
          <p className="mt-2 text-[20px] font-semibold">Impressions Per Week</p>
        </div>
        <div>
          <h2 className="text-[54px] font-bold">90+</h2>
          <p className="mt-2 text-[20px] font-semibold">DMAs</p>
        </div>
      </div>
    </div>
  );
}