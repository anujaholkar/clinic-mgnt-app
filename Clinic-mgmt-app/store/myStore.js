import {createStore, combineReducers, applyMiddleware} from 'redux';
import searchAppointmentReducer from '../reducers/searchAppointmentReducer';
//import NewAppointmentReducer from '../reducers/NewAppointmentReducer';
import {composeWithDevTools} from 'redux-devtools-extension';


import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    reducer1:searchAppointmentReducer,
    
    
});
const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

export default store;

sagaMiddleware.run(rootSaga);

store.dispatch({type:"ADD_A_APPOINTMENT"});
