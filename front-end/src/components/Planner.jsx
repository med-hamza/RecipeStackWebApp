import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPlanner } from "../reducers/recipeplanner";

const Planner = () => {
  const plannerItems = useSelector((state) => state.planner.plannerItems);
  const dispatch = useDispatch();

  console.log(plannerItems)

  const handleRemoveFromPlanner = (recipeId) => {
    dispatch(removeFromPlanner(recipeId));
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Planner</h2>
      <div className="days">
        {daysOfWeek.map((day) => (
          <div key={day} className="day">
            <div className=" text-red-700 text-xl font-bold">{day}</div>
            <div>
              {plannerItems.map((item) => {
                const selectedDays = item.days.map((dayObj) => dayObj.days).flat();
                if (selectedDays.includes(day)) {
                  return (
                    <div key={item.recipeId}>
                      {item.Title}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planner;
