import React from "react";


const Planner = ({ daysOfWeek, plannerItems }) => {


  return (
    <div className=" mt-28">
      <div className='bg-cover bg-center bg-no-repeat h-[400px] mt-0 md:mt-20 lg:mt-20' style={{ backgroundImage: `url(/planner_favorite.png)` }}>
        <div className='flex items-center justify-center h-full'>
          <div>
            <div className='text-center'>
              <h1 className='text-white text-4xl md:text-7xl lg:text-7xl font-semibold mb-4'>
                Your Planner
              </h1>
              <h2 className='text-white  font-thin leading-7 text-3xl md:text-5xl lg:text-5xl  '>your Daily Dish <br /> A Food Jounery</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Planner</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>

                    {daysOfWeek.map((day) => (

                      <th key={day}
                        className=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >{day}
                      </th>

                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {daysOfWeek.map((day) => (
                      <td key={day} className="px-5 py-5 border-b border-r-2 last:border-r-0 border-gray-200 bg-white text-sm">
                        {plannerItems.map((item) => {
                          const selectedDays = item.days.map((dayObj) => dayObj.days).flat();
                          if (selectedDays.includes(day)) {
                            return (
                              <div className="px-5 py-5  bg-white text-sm" key={item.recipeId}>
                                {item.Title}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </td>
                    ))}

                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="days">

      </div>
    </div>
  );
};

export default Planner;
