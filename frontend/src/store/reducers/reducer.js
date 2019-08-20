import * as actionTypes from '../actions/actionTypes';
import { updateObject, extractSpecProps, fetchLocations, parseEmissionsByLocations, countryList } from '../../shared/util';

const initialState = {
    emissions: undefined,
    locations: undefined,
    populations: undefined,
    loading: false
};

const fetchEmissionsFail = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchEmissionsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchEmissionsSuccess = ( state, action ) => {
    const list = countryList();
    const parsedEmissions = extractSpecProps(action.emissions, '__text')
    const parsedEmissionsByLocations = parseEmissionsByLocations(parsedEmissions, list);
    return updateObject( state, {
        emissions: parsedEmissionsByLocations,
        locations: fetchLocations(parsedEmissions, list),
        loading: false
    } );
};

const fetchPopulationsFail = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchPopulationsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchPopulationsSuccess = ( state, action ) => {
    return updateObject( state, {
        populations: extractSpecProps(action.populations, '__text'),
        loading: false
    } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_EMISSIONS_START: return fetchEmissionsStart( state, action );
        case actionTypes.FETCH_EMISSIONS_SUCCESS: return fetchEmissionsSuccess( state, action );
        case actionTypes.FETCH_EMISSIONS_FAIL: return fetchEmissionsFail( state, action );

        case actionTypes.FETCH_POPULATIONS_START: return fetchPopulationsStart( state, action );
        case actionTypes.FETCH_POPULATIONS_SUCCESS: return fetchPopulationsSuccess( state, action );
        case actionTypes.FETCH_POPULATIONS_FAIL: return fetchPopulationsFail( state, action );
        default: return state;
    }
};

export default reducer;