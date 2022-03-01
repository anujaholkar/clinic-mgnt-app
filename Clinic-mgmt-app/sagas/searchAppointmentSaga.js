import { put, takeLatest, all } from "redux-saga/effects";
// we need to code generator function for saga like this

function* searchAppointment(action) {
    console.log("Inside Appointment saga");
    console.log(action);
    const json = yield fetch("http://localhost:8080/appointments/search/appointmentDate/"+action.appointmentDate).then((response) =>

      response.json()
    );
    yield put({ type: "SEARCH_A_APPOINTMENT_SUCCESSFUL", json: json });
  }
  function* actionWatcher() {
    yield takeLatest("SEARCH_APPOINTMENT_WITH_APPOINTMENT_DATE", searchAppointment);
  }


  
  // for all the above sagas we need to create root saga
  export default function* rootSaga() {
    yield all([
      actionWatcher()
    ]);
  }