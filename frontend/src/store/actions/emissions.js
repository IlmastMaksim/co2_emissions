import * as actionTypes from './actionTypes';

import axios from '../../axios-settings';

export const fetchEmissionsSuccess = ( emissions ) => {
    return {
        type: actionTypes.FETCH_EMISSIONS_SUCCESS,
        emissions: emissions
    };
};

export const fetchEmissionsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_EMISSIONS_FAIL,
        error: error
    };
};

export const fetchEmissionsStart = () => {
    return {
        type: actionTypes.FETCH_EMISSIONS_START
    };
};

export const fetchEmissions = () => {
    return dispatch => {
        dispatch(fetchEmissionsStart());
                axios.get()                                                                                                                                                                                                                                                         
                    .then( response => {                                                                                                                                             
                       const storage = response.data.data.data.observations;
                        dispatch(fetchEmissionsSuccess(storage));
                    } )
                    .catch( err => {
                        dispatch(fetchEmissionsFail(err));
                    } );
    };
};