import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createActivity } from '../api/activities';
import { useForState, useStateDispatch } from '../StateContext';
import "./ActivityForm.css"

const ActivityForm = () => {
  const { token, activities } = useForState();
  const dispatch = useStateDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await createActivity(token, name, description);
      if (data.error) {
        throw data;
      }
      dispatch({ type: 'setActivities', payload: [...activities, data] });
    //   useNavigate(`/activities/${data.id}`);
    } catch (error) {
      console.log("Error submitting activity form: ", error);
      alert(error.message);
    }
  }

  return (
    <div className="activity-form-container">
      <form className="activity-form" onSubmit={handleSubmit}>
        <label className="activity-form-label">Name: </label>
        <input
          className="activity-form-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="activity-form-label">Description: </label>
        <input
          className="activity-form-input"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input className="activity-form-submit" type="submit" value="Create Activity" />
      </form>
    </div>
  );
};

export default ActivityForm;
