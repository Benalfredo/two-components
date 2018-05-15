import React from 'react';

const userInput = ( props ) => {// 7- onChange={props.change}
	const inputStyle = {
		border: '2px solid red'
	};// 10
	return <input type="text"
	style = {inputStyle} 
	onChange={props.changed}
	value={props.currentName} />; // 9 props.value, using currentName is reserved
	
};

export default userInput;