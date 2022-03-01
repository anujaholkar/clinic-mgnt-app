import SearchAppointment from './SearchAppointment';
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        appointmentData: store.reducer1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchAppointment: (appointmentDateVal) => dispatch({ type: "SEARCH_APPOINTMENT_WITH_APPOINTMENT_DATE", appointmentDate: appointmentDateVal }),
        removeAppointment: (dappointmentDate) => dispatch({type:"REMOVE_APPOINTMENT", appointmentDate: dappointmentDate }),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchAppointment);