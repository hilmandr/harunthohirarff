import React from "react";

const Runway = () => {
  return (
    <>
      <div className=" w-full h-full pt-32 fixed bg-green-700">
        <div className=" px-20">
          {/* TURNPAD 27 */}
          <div className=" flex relative z-0">
            <div className=" flex w-[70px] bg-stone-600 h-[30px] absolute right-0"></div>
            <div className=" flex w-[110px] bg-stone-600 h-[30px] rotate-[-30deg] absolute right-[55px] top-[25.5px]"></div>
          </div>

          <div className=" flex w-full h-[130px] bg-stone-800 z-10 relative mt-7 items-center justify-between border-white border-solid border-[3px]">
            {/* TRESHOLD 09 */}
            <div className=" p-4">
              <div className=" flex flex-col gap-2">
                <div className=" flex bg-white w-20 h-3"></div>
                <div className=" flex bg-white w-20 h-3"></div>
                <div className=" flex bg-white w-20 h-3"></div>
              </div>
              <div className=" flex flex-col gap-2 mt-3">
                <div className=" flex bg-white w-20 h-3"></div>
                <div className=" flex bg-white w-20 h-3"></div>
                <div className=" flex bg-white w-20 h-3"></div>
              </div>
            </div>
            <div className=" flex w-full gap-[-10px] items-center justify-between">
              {/* RUNWAY DESIGNATION MARK */}
              <div className=" text-white rotate-90">
                <h1 className=" text-3xl">09</h1>
              </div>
              <div className=" bg-white w-16 h-2"></div>
              <div className=" flex flex-col">
                <div className=" bg-white w-16 h-10"></div>
                <div className=" bg-white w-16 h-2 my-3"></div>
                <div className=" bg-white w-16 h-10"></div>
              </div>
              <div className=" bg-white w-16 h-2"></div>
              <div className=" bg-white w-16 h-2"></div>
              <div className=" bg-white w-16 h-2"></div>
              <div className=" bg-white w-16 h-2"></div>
              <div className=" bg-white w-16 h-2"></div>
              <div className=" flex flex-col">
                <div className=" bg-white w-16 h-10"></div>
                <div className=" bg-white w-16 h-2 my-3"></div>
                <div className=" bg-white w-16 h-10"></div>
              </div>
              <div className=" bg-white w-16 h-2"></div>
              <div className=" text-white -rotate-90">
                <h1 className=" text-3xl">27</h1>
              </div>
            </div>

            <div className=" p-4">
              {/* TRESHOLD 27 */}
              <div className=" flex flex-col gap-2">
                <div className=" flex bg-white w-20 h-3"></div>
                <div className=" flex bg-white w-20 h-3"></div>
                <div className=" flex bg-white w-20 h-3"></div>
              </div>
              <div className=" flex flex-col gap-2 mt-3">
                <div className=" flex bg-white w-20 h-3"></div>
                <div className=" flex bg-white w-20 h-3"></div>
                <div className=" flex bg-white w-20 h-3"></div>
              </div>
            </div>
          </div>

          {/* TURNPAD 09 */}
          <div className=" flex relative z-0">
            <div className=" flex w-[70px] bg-stone-600 h-[30px] absolute left-0"></div>
            <div className=" flex w-[110px] bg-stone-600 h-[30px] rotate-[-30deg] absolute left-[55px] top-[-25.5px]"></div>
          </div>
        </div>
        <div className=" relative -left-20">
          {/* TAXIWAY APRON */}
          <div className=" absolute left-[430px]">
            <div className=" bg-stone-800 w-14 h-40 py-5">
              <div className=" flex bg-yellow-500 w-full h-1"></div>
              <div className=" flex w-full h-1 border-b-yellow-500 border-b-[3px] border-dashed"></div>
            </div>
            <div className=" flex items-center justify-between bg-stone-800 w-80 h-52 absolute -left-[130px] px-10">
              <div className="  border borer border-yellow-500 rounded-3xl w-14 h-40"></div>
              <div className="  border borer border-yellow-500 rounded-3xl w-14 h-40"></div>
              <div className="  border borer border-yellow-500 rounded-3xl w-14 h-40"></div>
            </div>
          </div>
          <div className=" absolute bg-yellow-400 w-[1px] h-[185px] left-[458px]"></div>

          {/* FIRE STATION */}
          <div className=" bg-stone-800 w-56 h-5 absolute mt-14 ml-[470px]"></div>
          <div className=" absolute left-[680px]">
            <div className=" flex flex-col bg-stone-800 w-14 h-60 items-center py-5">
              <div className=" flex w-full h-1 bg-white"></div>
              <p className=" text-white">STOP</p>
            </div>
            <div className=" bg-stone-800 w-52 h-28 absolute top-40"></div>
          </div>
        </div>
        {/* TERMINAL */}
        <div className=" flex relative bg-blue-400 w-48 h-24 top-96 left-[280px]"></div>

        {/* KANTOR */}
        <div className=" flex flex-col w-full h-full relative top-[175px] left-[600px]">
          <div className=" flex bg-stone-800 w-10 h-28"></div>
          <div className=" flex bg-amber-800 w-32 h-16"></div>
        </div>
      </div>
    </>
  );
};

export default Runway;
