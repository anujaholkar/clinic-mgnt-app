import { useState } from "react";
import "../css/Table.css";



const SearchAppointment = (props) => {
	// const appointmentDayDate = [""];

  // const [selectedDate, setSelectedDate] = useState(null)

	const [localState, setLocalState] = useState({ appointmentDate: "" });

	const handleChange = (e) => {
		e.preventDefault();
		setLocalState({ ...localState, [e.target.name]: e.target.value });
		console.log(setLocalState);
		console.log(e.target.value);
		console.log(e.target.name);
	};

	const searchAppointment = (e) => {
		e.preventDefault();
		// store.dispatch({ type: "ADD", playName: localState2.nAdd, playAge: localState2.aAdd, playAwards: localState2.awAdd })
		props.searchAppointment(localState.appointmentDate);
	};

	const [localState1, setLocalState1] = useState({ appointmentToRemove: "" });

	const handleChange1 = (e) => {
		e.preventDefault();
		setLocalState1({ ...localState1, appointmentToRemove: e.target.value });
	};

	const removeAppointment = () => {
		// store.dispatch({ type: "REMOVE_NAME", playerName: localState.playerToRemove });
		// console.log("latest store data is :");
		// console.log(store.getState());
		props.removeAppointment(localState1.appointmentToRemove);
	};

	return (
		<div>
			<h1>APPOINTMENTS SEARCH FORM</h1>
		    
			<h2 style={{ margin: "50px" }}>
				<b>SEARCH BY</b>
			</h2>
			
		</div>
	);
};

export default SearchAppointment;
