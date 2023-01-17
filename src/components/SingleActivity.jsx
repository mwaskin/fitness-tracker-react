import React from "react";

const SingleActivity = ({ activity }) => {
	return (
		<div key={activity.id}>
			<p>{activity.name}</p>
			<p>Description: {activity.description}</p>
			<p>Duration: {activity.duration}</p>
			<p>Count: {activity.count}</p>
		</div>
	);
};

export default SingleActivity;
