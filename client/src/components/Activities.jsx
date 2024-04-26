
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities, addActivity, updateActivity } from '../reducers/activityReducer';

const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activity.activities);
  const status = useSelector((state) => state.activity.status);
  const error = useSelector((state) => state.activity.error);

  const [inputValue, setInputValue] = useState('');
   const [name , setname] = useState([]);
   const [newName, setNewName] = useState(false)

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  console.log(activities)

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
   

  const handleAddActivity = async (name) => {
    if (inputValue.trim() === '') {
      console.log('Name is required');
      return;
    }
    try {
      await dispatch(addActivity({ name: inputValue }));
      setname((prevNames) => [...prevNames, inputValue]); // Append the new name to the existing array
      setInputValue(""); // Clear the input value
      console.log("Added activity:", inputValue);
    } catch (error) {
      console.log("This is an error");
    }
  };
  const handleUpdateActivity = async (id, newName) => {
    try {
      await dispatch(updateActivity({ id, name: newName }));
      console.log("Update success");
    } catch (error) {
      console.log("Update error");
    }
  };

  const chagename = (event) => {
    setNewName(event.target.value);
  };
  

  return (
    <div>
      <div className="input">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit" onClick={handleAddActivity}>
          Add Name
        </button>
      </div>

      {name.map((activity, index) => (
        <div key={index}>{activity}
          <input type="text" value={newName} onChange={chagename} />
<button type="submit" onClick={() => handleUpdateActivity(activity.id, newName)}> update </button>
        
        </div>
        
      ))}
  
    </div>
  );
}

export default Activities