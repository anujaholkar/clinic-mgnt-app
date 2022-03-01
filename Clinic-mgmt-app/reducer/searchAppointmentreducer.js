const searchAppointmentReducer = (state = {}, action) => {
	console.log(action);
	console.log(state);
	switch (action.type) {
		case "SEARCH_A_APPOINTMENT_SUCCESSFUL":
			let newState = { ...state, searchResults: action.json };
			newState.searchAppointmentSuccess =
				"SUCCESSFULLY ADDED THE APPOINTMENT";
			console.log(newState);
			return newState;

		case "REMOVE_APPOINTMENT":
			let dappointmentDate = action.appointmentDate;
			let [...newState2] = state;
			newState2 = newState2.filter(
				(item) => item.name !== dappointmentDate
			);
			return newState2;

		default:
			return state;
	}
};

export default searchAppointmentReducer;
