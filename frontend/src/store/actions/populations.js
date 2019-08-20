import * as actionTypes from './actionTypes';

import axios from '../../axios-settings';

export const fetchPopulationsSuccess = ( populations ) => {
    return {
        type: actionTypes.FETCH_POPULATIONS_SUCCESS,
        populations: populations
    };
};

export const fetchPopulationsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_POPULATIONS_FAIL,
        error: error
    };
};

export const fetchPopulationsStart = () => {
    return {
        type: actionTypes.FETCH_POPULATIONS_START
    };
};

export const fetchPopulations = () => {
     return dispatch => {
        dispatch(fetchPopulationsStart());
                axios.get('http://localhost:5000/populations')                                                                                                                                                                                                                                                         
                    .then( response => {                                                                                                                                                 
                    const storage = response.data.data.data.observations;
                        dispatch(fetchPopulationsSuccess(storage))
                    } )
                    .catch( err => {
                        dispatch(fetchPopulationsFail(err));
                    } );
    };
};