import React from 'react'
import { removeFromPlanner } from '../reducers/recipeplanner';
import { useSelector } from "react-redux";
import Planner from '../components/Planner';

const Plan = () => {
    const plannerItems = useSelector((state) => state.planner.plannerItems);
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <>
            <Planner daysOfWeek={daysOfWeek} plannerItems={plannerItems} />
        </>

    )
}

export default Plan
