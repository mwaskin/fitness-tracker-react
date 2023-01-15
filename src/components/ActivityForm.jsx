import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createActivity } from '../api/activities';
import { useForState, useStateDispatch } from '../StateContext';

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
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Description: </label>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input type="submit" value="Create Activity" />
    </form>
  );
};

export default ActivityForm;
