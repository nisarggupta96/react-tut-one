import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
	return (
		<div className="UserOutput">
			<p> Logged in user : {props.name}</p>
			<p> Para number 2 </p>
		</div>
	)
};

export default UserOutput;